import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";

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
  loading = false;
  submitted = false;
  error = '';
  priceData = {
    x: [],
    open: [],
    high: [],
    low: [],
    close: [],
    type: 'ohlc',
  };
  graph = {
    data: [this.priceData],
    // data: [
    //   { x: this.priceData.x, y: this.priceData.y, type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
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
                     private chartDataService: GeneralChartDataService) {
    titleService.setTitle(`${strings.ohlcChart}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      startTime: [''],
      endTime: [''],
      timezone: ['', Validators.required],
    });
    this.f.timezone.setValue(0);
    this.onSubmit();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const self = this;
    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;

    const symbol = 'XBTUSD';
    const binSize = '5m';
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(this.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(this.f.endTime.value, 'yyyy-MM-dd');
    const timezone = this.f.timezone.value;

    this.priceData.x = [];
    this.priceData.open = [];
    this.priceData.high = [];
    this.priceData.low = [];
    this.priceData.close = [];

    this.chartDataService.ohlc({
      symbol,
      binSize,
      startTime,
      endTime,
      timezone,
    })
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
              this.priceData.x.push(item['timestamp']);
              this.priceData.open.push(item['open']);
              this.priceData.high.push(item['high']);
              this.priceData.low.push(item['low']);
              this.priceData.close.push(item['close']);
            }
          }
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
        this.priceData.x = [];
        this.priceData.open = [];
        this.priceData.high = [];
        this.priceData.low = [];
        this.priceData.close = [];
      });
  }
}
