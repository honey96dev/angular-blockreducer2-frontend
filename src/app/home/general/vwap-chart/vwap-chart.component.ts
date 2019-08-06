import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GlobalVariableService, GeneralChartDataService, DashboardService} from "@app/_services";
import {first} from "rxjs/operators";

let self;

@Component({
  selector: 'home-vwap-chart',
  templateUrl: './vwap-chart.component.html',
  styleUrls: ['./vwap-chart.component.scss']
})
export class VwapChartComponent implements OnInit {
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

  num_3 = {
    x: [],
    y: [],
    name: 'Num3*VWAP',
    yaxis: 'y1',
    type: 'scatter',
  };
  num_6 = {
    x: [],
    y: [],
    name: 'Num6*VWAP',
    yaxis: 'y1',
    type: 'scatter',
  };
  num_9 = {
    x: [],
    y: [],
    name: 'Num9*VWAP',
    yaxis: 'y1',
    type: 'scatter',
  };
  num_100 = {
    x: [],
    y: [],
    name: 'Num100*VWAP',
    yaxis: 'y1',
    type: 'scatter',
  };
  plotly1 = {
    data: [this.num_3, this.num_6, this.num_9, this.num_100,],
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
        title: 'Open / Real',
        autorange: true,
        type: 'linear',
      },
      yaxis2: {
        title: 'Volume',
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
    if (this.currentSymbol != 'XBTUSD') {
      this.arrow = {
        show: true,
        type: 'warning',
        message: strings.noData,
      }
      return;
    }
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
    console.log('vwap-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = 'XBTUSD';
    const binSize = self.f.binSize.value;
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.num_3.x = [];
    self.num_3.y = [];
    self.num_6.x = [];
    self.num_6.y = [];
    self.num_9.x = [];
    self.num_9.y = [];
    self.num_100.x = [];
    self.num_100.y = [];

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
              self.num_3.x.push(item.timestamp);
              self.num_3.y.push(item.num_3);
              self.num_6.x.push(item.timestamp);
              self.num_6.y.push(item.num_6);
              self.num_9.x.push(item.timestamp);
              self.num_9.y.push(item.num_9);
              self.num_100.x.push(item.timestamp);
              self.num_100.y.push(item.num_100);
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
  }
}
