import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {DashboardService} from "@app/_services/dashboard.service";

let self;

@Component({
  selector: 'home-ohlc-chart',
  templateUrl: './ohlc-chart.component.html',
  styleUrls: ['./ohlc-chart.component.scss']
})
export class OhlcChartComponent implements OnInit {
  strings = strings;
  form: FormGroup;
  arrow = {
    show: false,
    type: '',
    message: '',
  };
  symbol = this.dashboardService.currentSymbol;
  loading = false;
  submitted = false;
  error = '';

  symbols = [
    {label: 'Bitcoin', value: 'XBTUSD'},
    {label: 'Ethereum', value: 'tETHUSD'},
    {label: 'Bitcoin Cash', value: 'tBABUSD'},
    {label: 'EOS', value: 'tEOSUSD'},
    {label: 'Litecoin', value: 'tLTCUSD'},
    {label: 'Bitcoin SV', value: 'tBSVUSD'},
  ];
  openData = {
    x: [],
    y: [],
    type: 'scatter',
    opacity: 0.2,
  };
  ohlcData = {
    x: [],
    open: [],
    high: [],
    low: [],
    close: [],
    type: 'ohlc',
    mode: 'lines+points',
    marker: {
      line: {
        width: 2,
      }
    },
  };
  graph = {
    data: [this.openData, this.ohlcData],
    // data: [
    //   { x: this.ohlcData.x, y: this.ohlcData.y, type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    // ],
    layout: {
      height: 850,
      autosize: true,
      xaxis: {
        autorange: true,
        rangeslider: {},
        title: 'Date',
        type: 'date',
      },
      yaxis: {
        title: 'Price',
        autorange: true,
        rangeslider: {},
        type: 'linear',
      },
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private dashboardService: DashboardService,
                     private chartDataService: GeneralChartDataService) {
    titleService.setTitle(`${strings.ohlcChart}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      symbol: [''],
      startTime: [''],
      endTime: [''],
      timezone: ['', Validators.required],
    });
    this.f.symbol.setValue(this.symbol);
    this.f.timezone.setValue(0);
    this.onSubmit();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (self.globalsService.chartTimeoutId) {
      clearTimeout(self.globalsService.chartTimeoutId);
    }
    console.log('ohlc-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = self.f.symbol.value;
    // const symbol = self.symbol;
    const binSize = '5m';
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.openData.x = [];
    self.openData.open = [];
    self.ohlcData.x = [];
    self.ohlcData.open = [];
    self.ohlcData.high = [];
    self.ohlcData.low = [];
    self.ohlcData.close = [];

    self.chartDataService.ohlc({
      symbol,
      binSize,
      startTime,
      endTime,
      timezone,
    })
      .pipe(first())
      .subscribe(res => {
        self.loading = false;
        self.arrow.show = false;

        if (res.result == 'success') {
          const data = res.data;
          if (data.length === 0) {
            self.arrow = {
              show: true,
              type: 'warning',
              message: strings.noData,
            };
          } else {
            for (let item of data) {
              self.openData.x.push(item['timestamp']);
              self.openData.y.push(item['open']);
              self.ohlcData.x.push(item['timestamp']);
              self.ohlcData.open.push(item['open']);
              self.ohlcData.high.push(item['high']);
              self.ohlcData.low.push(item['low']);
              self.ohlcData.close.push(item['close']);
            }
          }
        } else {
          self.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        self.loading = false;
        self.error = error;
        self.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
        self.ohlcData.x = [];
        self.ohlcData.open = [];
        self.ohlcData.high = [];
        self.ohlcData.low = [];
        self.ohlcData.close = [];
      });

    let timeoutDelay = 2 * 60 * 1000;
    self.globalsService.chartTimeoutId = setTimeout(self.onSubmit, timeoutDelay);
  }
}
