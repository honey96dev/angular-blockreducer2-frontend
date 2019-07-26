import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {SelectionModel} from "@angular/cdk/collections";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import SocketIOClient from 'socket.io-client';
import numeral from 'numeral';
import {sprintf} from 'sprintf-js';
import strings from "@core/strings";
import {ExchangeInfoDataService} from "@app/_services/exchange-info-data.service";
import {environment} from "@environments/environment";

export class Cryptowatch {
  exchange_id: any;
  symbol: any;
  name: any;
  route: any;
  active: any;
  enable: any;
}

export class CryptoExchange {
  marker: any;
  price: any;
  amount: any;
  timestamp: any;
}

@Component({
  selector: 'home-exchange-info',
  templateUrl: './exchange-info.component.html',
  styleUrls: ['./exchange-info.component.scss']
})

export class ExchangeInfoComponent implements OnInit {
  strings = strings;
  form: FormGroup;
  arrow = {
    show: false,
    type: '',
    message: '',
  };
  loading = false;
  submitted = false;
  error = '';

  itemCounts = [
    {label: 10, value: 10},
    {label: 25, value: 25},
    {label: 50, value: 50},
    {label: 75, value: 75},
    {label: 100, value: 100},
    {label: 150, value: 150},
  ];

  cryptowatchColumns: string[] = ['exchange_id', 'symbol', 'name', 'route', 'active', 'enable'];
  cryptowatchRows: Cryptowatch[] = [];
  cryptowatchSource: MatTableDataSource<Cryptowatch>;
  cryptowatchInitialSelection = [];
  cryptowatchAllowMultiSelect = true;
  cryptowatchSelection: SelectionModel<Cryptowatch>;

  // cryptoExchangeColumns: string[] = ['marker', 'price', 'amount', 'timestamp'];
  cryptoExchangeRows: CryptoExchange[] = [];
  // cryptoExchangeSource: MatTableDataSource<CryptoExchange>;

  ioClient = SocketIOClient(environment.socketIOUrl, {
    reconnection: true,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 4000,
    reconnectionAttempts: Infinity
  });

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private chartDataService: ExchangeInfoDataService,
                     private changeDetectorRefs: ChangeDetectorRef) {
    titleService.setTitle(`${strings.exchangeInformation}-${strings.siteName}`);
  }

  @ViewChild(MatPaginator, {static: true}) exchangeSourcePaginator: MatPaginator;

  ngOnInit() {
    const self = this;
    this.form = this.formBuilder.group({
      symbol: ['', Validators.required],
      minPrice: ['', Validators.required],
      itemCount: ['', Validators.required],
    });
    this.f.symbol.setValue('btcusdt');
    this.f.minPrice.setValue(30);
    this.f.itemCount.setValue(50);

    this.cryptowatchSource = new MatTableDataSource(this.cryptowatchRows);
    this.cryptowatchSource.paginator = this.exchangeSourcePaginator;
    this.cryptowatchSelection = new SelectionModel<Cryptowatch>(this.cryptowatchAllowMultiSelect, this.cryptowatchInitialSelection);

    // this.cryptoExchangeSource = new MatTableDataSource<CryptoExchange>(this.cryptoExchangeRows);

    this.loadCryptowatchData();

    this.ioClient.on('marketHistory', (data) => {
      // console.log('marketHistory', typeof data, data);
      self.parseCryptoExchangeData(data);
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  parseCryptoExchangeData(data) {
    if (typeof data === 'string') {
      data = JSON.parse(data);
    }

    const itemCount = this.f.itemCount.value;
    let rows = data.reverse().slice(0, itemCount);
    let timestamp;
    for (let row of rows) {
      row['class'] = "streaming-list-row" + (row['marker'] ? ' exchange-row-sell' : ' exchange-row-buy');
      if (row['amount'] > 99999) {
        row['class'] += " font-weight-dark";
      } else if (row['amount'] > 999) {
        row['class'] += " font-weight-bold";
      }
      row['formattedPrice'] = numeral(row['price']).format('0,0.00');
      row['formattedAmount'] = numeral(row['amount']).format('0,0.0 a');

      timestamp = new Date(row['timestamp'] * 1000);
      // row['timestamp'] = new Date(row['timestamp'] * 1000).toUTCString();
      // row['timestamp'] = new Date(row['timestamp'] * 1000).toISOString();
      row['timestamp'] = sprintf("%02d/%02d/%04d %02d:%02d:%02d", timestamp.getMonth() + 1, timestamp.getDate(), timestamp.getFullYear(), timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds());
    }
    // this.cryptoExchangeRows = [];
    this.cryptoExchangeRows = rows;
    // this.f.randomSeed.setValue(Math.random());
    console.log('parseCryptoExchangeData', rows);
    // this.cryptoExchangeSource.data = this.cryptoExchangeRows;
    this.changeDetectorRefs.detectChanges();
  }

  cryptowatchIsAllSelected() {
    const numSelected = this.cryptowatchSelection.selected.length;
    const numRows = this.cryptowatchSource.data.length;
    return numSelected == numRows;
  }

  cryptowatchMasterToggle() {
    this.cryptowatchIsAllSelected() ?
      this.cryptowatchSelection.clear() :
      this.cryptowatchSource.data.forEach(row => this.cryptowatchSelection.select(row));
  }

  cryptowatchApplyFilter(filterValue: string) {
    this.cryptowatchSource.filter = filterValue.trim().toLowerCase();
  }

  loadCryptowatchData() {
    this.loading = true;
    this.cryptowatchRows = [];
    this.chartDataService.cryptoMarkets()
      .pipe(first())
      .subscribe(res => {
        this.loading = false;
        this.arrow.show = false;

        if (res.result == 'success') {
          const data = res.data;
          if (data.length === 0) {
            this.arrow = {
              show: true,
              type: 'warning',
              message: strings.noData,
            };
          } else {
            for (let item of data) {
              this.cryptowatchRows.push(item);
            }
          }
          // this.cryptowatchSource = new MatTableDataSource(this.cryptowatchRows);
          this.cryptowatchSource.data = this.cryptowatchRows;
          this.cryptowatchSource.paginator = this.exchangeSourcePaginator;
          this.changeDetectorRefs.detectChanges();
        } else {
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        this.loading = false;
        this.error = error;
        this.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
      });
  }

  onSubmit() {
    const self = this;
    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;

    const symbol = this.f.symbol.value;
    const minPrice = this.f.minPrice.value;
    const itemCount = this.f.itemCount.value;
    let exchangeIds = [];
    for (let item of this.cryptowatchRows) {
      if (this.cryptowatchSelection.isSelected(item)) {
        exchangeIds.push(item.symbol);
      }
    }

    this.chartDataService.subscribe({
      symbol,
      minPrice,
      itemCount,
      exchangeIds,
      // exchangeIds: exchangeIds.join(','),
    })
      .pipe(first())
      .subscribe(res => {
        this.loading = false;
        this.arrow.show = false;

        if (res.result == 'success') {
          const data = res.data;

          this.parseCryptoExchangeData(data);
        } else {
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        this.loading = false;
        this.error = error;
        this.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
      });
  }
}
