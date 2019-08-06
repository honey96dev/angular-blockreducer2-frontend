import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService, GlobalVariableService, DashboardService} from "@app/_services";
import {first} from "rxjs/operators";

let self;
@Component({
  selector: 'home-volume-chart',
  templateUrl: './volume-chart.component.html',
  styleUrls: ['./volume-chart.component.scss']
})
export class VolumeChartComponent implements OnInit {
  strings = strings;
  form: FormGroup;
  arrow = {
    show: false,
    type: '',
    message: '',
  };
  currentSymbol: string;
  loading = false;
  submitted = false;
  error = '';


  binSizes = [
    {label: '1m', value: '1m'},
    {label: '5m', value: '5m'},
    {label: '1h', value: '1h'},
  ];

  openData = {
    x: [],
    y: [],
    yaxis: 'y1',
    name: 'Open',
    type: 'scatter',
  };
  volumeData = {
    x: [],
    y: [],
    yaxis: 'y2',
    name: 'Volume',
    type: 'scatter',
  };
  volumeSumData = {
    x: [],
    y: [],
    yaxis: 'y2',
    name: 'Volume Sum',
    type: 'scatter',
  };
  open2Data = {
    x: [],
    y: [],
    yaxis: 'y1',
    name: 'Open',
    type: 'scatter',
  };
  openInterestData = {
    x: [],
    y: [],
    yaxis: 'y2',
    name: 'Open Interest',
    type: 'scatter',
  };
  openValueData = {
    x: [],
    y: [],
    yaxis: 'y2',
    name: 'Open Value',
    type: 'scatter',
  };
  plotly1 = {
    data: [this.openData, this.volumeData, this.volumeSumData],
    layout: {
      height: 700,
      autosize: true,
      showlegend: true,
      xaxis: {
        autorange: true,
        rangeslider: {},
        title: 'Date',
        type: 'date',
      },
      yaxis: {
        title: 'Price',
        autorange: true,
        type: 'linear',
      },
      yaxis2: {
        title: 'Volume / Volume Sum',
        overlaying: 'y',
        side: 'right',
      }
    },
  };
  plotly2 = {
    data: [this.open2Data, this.openInterestData, this.openValueData],
    layout: {
      height: 700,
      autosize: true,
      showlegend: true,
      xaxis: {
        autorange: true,
        rangeslider: {},
        title: 'Date',
        type: 'date',
      },
      yaxis: {
        title: 'Price',
        autorange: true,
        type: 'linear',
      },
      yaxis2: {
        title: 'Open Interest / Open Value',
        overlaying: 'y',
        side: 'right',
      }
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private chartDataService: GeneralChartDataService,
                     private dashboardService: DashboardService) {
    titleService.setTitle(`${strings.volumeChart}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
    this.currentSymbol = this.dashboardService.currentSymbol;
    this.form = this.formBuilder.group({
      binSize: [''],
      startTime: [''],
      endTime: [''],
      timezone: ['', Validators.required],
    });
    this.f.binSize.setValue('5m');
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
    console.log('volume-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = this.currentSymbol;
    const binSize = self.f.binSize.value;
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.openData.x = [];
    self.openData.y = [];
    self.volumeData.x = [];
    self.volumeData.y = [];
    self.volumeSumData.x = [];
    self.volumeSumData.y = [];

    if (symbol == 'XBTUSD') {
      self.chartDataService.volume1({
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
                self.volumeData.x.push(item['timestamp']);
                self.volumeData.y.push(item['volume']);
                self.volumeSumData.x.push(item['timestamp']);
                self.volumeSumData.y.push(item['volumeSum']);
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
        });

      self.open2Data.x = [];
      self.open2Data.y = [];
      self.openInterestData.x = [];
      self.openInterestData.y = [];
      self.openValueData.x = [];
      self.openValueData.y = [];

      self.chartDataService.volume2({
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
                self.open2Data.x.push(item['timestamp']);
                self.open2Data.y.push(item['open']);
                self.openInterestData.x.push(item['timestamp']);
                self.openInterestData.y.push(item['openInterest']);
                self.openValueData.x.push(item['timestamp']);
                self.openValueData.y.push(item['openValue']);
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
        });

      let timeoutDelay = 2 * 60 * 1000;
      if (binSize === '1m') {
        timeoutDelay = 30 * 1000;
      } else if (binSize === '1h') {
        timeoutDelay = 30 * 60 * 1000;
      }
      self.globalsService.chartTimeoutId = setTimeout(self.onSubmit, timeoutDelay);
    } else {
      self.chartDataService.volume0({
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
                self.volumeData.x.push(item['timestamp']);
                self.volumeData.y.push(item['volume']);
                self.volumeSumData.x.push(item['timestamp']);
                self.volumeSumData.y.push(item['volumeSum']);
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
        });
    }
  }
}
