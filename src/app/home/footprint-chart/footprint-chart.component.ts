import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {FootprintDataService} from "@app/_services";
import {first} from "rxjs/operators";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {DashboardService} from "@app/_services/dashboard.service";
import {sprintf} from 'sprintf-js';

let self;

@Component({
  selector: 'home-footprint-chart',
  templateUrl: './footprint-chart.component.html',
  styleUrls: ['./footprint-chart.component.scss']
})
export class FootprintChartComponent implements OnInit {
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

  symbols = [
    {label: 'Bitcoin', value: 'XBTUSD'},
    {label: 'Ethereum', value: 'tETHUSD'},
    {label: 'Bitcoin Cash', value: 'tBABUSD'},
    {label: 'EOS', value: 'tEOSUSD'},
    {label: 'Litecoin', value: 'tLTCUSD'},
    {label: 'Bitcoin SV', value: 'tBSVUSD'},
  ];
  symbol = this.dashboardService.currentSymbol;
  chartData: object;

  timestamps: [] = [];
  timestamps1: [] = [];
  prices: [] = [];

  color1: Array<any> = [
    {range: 10, color: 'rgba(0, 255, 0, 0.25)'},
    {range: 100, color: 'rgba(0, 255, 0, 0.4)'},
    {range: 1000, color: 'rgba(0, 255, 0, 0.55)'},
    {range: 10000, color: 'rgba(0, 255, 0, 0.7)'},
    {range: 100000, color: 'rgba(0, 255, 0, 0.85)'},
    {range: 1000000, color: 'rgba(0, 255, 0, 1)'},
  ];
  color2: Array<any> = [
    {range: 10, color: 'rgba(255, 0, 0, 0.25)'},
    {range: 100, color: 'rgba(255, 0, 0, 0.4)'},
    {range: 1000, color: 'rgba(255, 0, 0, 0.55)'},
    {range: 10000, color: 'rgba(255, 0, 0, 0.7)'},
    {range: 100000, color: 'rgba(255, 0, 0, 0.85)'},
    {range: 1000000, color: 'rgba(255, 0, 0, 1)'},
  ];

  colorPickerPosition: string = 'bottom';

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private dashboardService: DashboardService,
                     private chartDataService: FootprintDataService) {
    titleService.setTitle(`${strings.footprint}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      symbol: [''],
      startTime: [''],
      endTime: [''],
      startPrice: ['', Validators.required],
      endPrice: ['', Validators.required],
      step: ['', [Validators.required, Validators.min(1)]],
      showColorPicker: [''],
    });
    this.f.symbol.setValue(this.symbol);
    this.f.endTime.setValue('2019-08-27');
    this.f.startPrice.setValue(9500);
    this.f.endPrice.setValue(10500);
    this.f.step.setValue(3);
    this.f.showColorPicker.setValue(false);
    this.onSubmit();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (self.form.invalid) {
      return;
    }
    if (self.globalsService.chartTimeoutId) {
      clearTimeout(self.globalsService.chartTimeoutId);
    }
    console.log('footprint-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = self.f.symbol.value;
    // const symbol = self.symbol;
    const binSize = '5m';
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const startPrice = self.f.startPrice.value;
    const endPrice = self.f.endPrice.value;
    const step = self.f.step.value;

    self.chartDataService.index({
      symbol,
      binSize,
      startTime,
      endTime,
      startPrice,
      endPrice,
      step,
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
            self.timestamps = [];
            self.prices = [];
          } else {
            let chartData = {};
            let buyCnt;
            let sellCnt;
            let diff;
            for (let item of data) {
              if (chartData[item['timestamp']] == null) {
                chartData[item['timestamp']] = {};
              }
              if (chartData[item['timestamp']][item['price']] == null) {
                chartData[item['timestamp']][item['price']] = {};
              }
              chartData[item['timestamp']][item['price']][item['side']] = item['count'];
              buyCnt = !!chartData[item['timestamp']][item['price']]['Buy'] ? chartData[item['timestamp']][item['price']]['Buy'] : 0;
              sellCnt = !!chartData[item['timestamp']][item['price']]['Sell'] ? chartData[item['timestamp']][item['price']]['Sell'] : 0;
              diff = buyCnt - sellCnt;
              for (let color of self.color1) {
                if (diff >= color.range) {
                  chartData[item['timestamp']][item['price']]['style'] = color.color;
                  // chartData[item['timestamp']][item['price']]['style'] = sprintf("background-color: %s;", color.color);
                }
              }
              diff = sellCnt - buyCnt;
              for (let color of self.color2) {
                if (diff >= color.range) {
                  chartData[item['timestamp']][item['price']]['style'] = color.color;
                  // chartData[item['timestamp']][item['price']]['style'] = sprintf("background-color: %s;", color.color);
                }
              }
            }
            self.chartData = chartData;
            self.timestamps = [];
            self.timestamps1 = [];
            self.prices = [];
            const length = data.length;
            const timestamp1 = new Date(data[0]['timestamp']).getTime();
            const timestamp2 = new Date(data[length - 1]['timestamp']).getTime();
            const step1 = 5 * 60 * 1000;
            let temp;
            for (let x = timestamp1; x <= timestamp2; x += step1) {
              temp = new Date(x).toISOString();
              // self.timestamps.push(temp);
              self.timestamps.push(temp);
              self.timestamps1.push(temp.substr(11, 5));
            }
            for (let x = startPrice; x <= endPrice; x += step) {
              self.prices.push(x);
            }
          }
          // console.log('chartData', self.chartData);
        } else {
          self.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
          self.timestamps = [];
          self.prices = [];
        }
      }, error => {
        self.loading = false;
        self.error = error;
        self.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
        self.timestamps = [];
        self.prices = [];
      });

    let timeoutDelay = 2 * 60 * 1000;
    self.globalsService.chartTimeoutId = setTimeout(self.onSubmit, timeoutDelay);
  }
}
