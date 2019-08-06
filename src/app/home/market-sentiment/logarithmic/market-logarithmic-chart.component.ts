import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {first} from "rxjs/operators";
import {MarketSentimentChartDataService} from "@app/_services/market-sentiment-chart-data.service";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {DashboardService} from "@app/_services/dashboard.service";

let self;

@Component({
  selector: 'home-market-logarithmic-chart',
  templateUrl: './market-logarithmic-chart.component.html',
  styleUrls: ['./market-logarithmic-chart.component.scss']
})
export class MarketLogarithmicChartComponent implements OnInit {
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

  binSizes = [
    {label: '1m', value: '1m'},
    {label: '5m', value: '5m'},
    {label: '1h', value: '1h'},
  ];

  openData = {
    x: [],
    y: [],
    name: 'Open',
    yaxis: 'y1',
    type: 'scatter',
  };
  num3Data = {
    x: [],
    y: [],
    name: 'Num3',
    yaxis: 'y1',
    type: 'scatter',
  };
  num6Data = {
    x: [],
    y: [],
    name: 'Num6',
    yaxis: 'y1',
    type: 'scatter',
  };
  num9Data = {
    x: [],
    y: [],
    name: 'Num9',
    yaxis: 'y1',
    type: 'scatter',
  };
  num100Data = {
    x: [],
    y: [],
    name: 'Num100',
    yaxis: 'y1',
    type: 'scatter',
  };
  num3iData = {
    x: [],
    y: [],
    name: 'Num3i',
    yaxis: 'y2',
    type: 'scatter',
    line: {
      dash: 'dash',
    },
  };
  num6iData = {
    x: [],
    y: [],
    name: 'Num6i',
    yaxis: 'y2',
    type: 'scatter',
    line: {
      dash: 'dash',
    },
  };
  num9iData = {
    x: [],
    y: [],
    name: 'Num9i',
    yaxis: 'y2',
    type: 'scatter',
    line: {
      dash: 'dash',
    },
  };
  num100iData = {
    x: [],
    y: [],
    name: 'Num100i',
    yaxis: 'y2',
    type: 'scatter',
    line: {
      dash: 'dash',
    },
  };
  graph = {
    data: [this.openData, this.num3Data, this.num6Data, this.num9Data, this.num100Data, this.num3iData, this.num6iData, this.num9iData, this.num100iData],
    // data: [
    //   { x: this.priceData.x, y: this.priceData.y, type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    // ],
    layout: {
      height: 1500,
      autosize: true,
      // margin: {
      //   l: 40,
      //   r: 40,
      //   t: 30,
      //   b: 30,
      // },
      showlegend: true,
      xaxis: {
        autorange: true,
        rangeslider: {},
        title: 'Date',
        type: 'date',
      },
      yaxis: {
        title: 'Open/Real',
        autorange: true,
        type: 'log',
      },
      yaxis2: {
        title: 'Imagine',
        autorange: true,
        // titlefont: {color: 'rgb(148, 103, 189)'},
        // tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right',
      }
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private dashboardService: DashboardService,
                     private chartDataService: MarketSentimentChartDataService) {
    titleService.setTitle(`${strings.marketSentiment} ${strings.logarithmicChart}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
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
    console.log('market-logarithmic-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = self.dashboardService.currentSymbol;
    const binSize = self.f.binSize.value;
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.openData.x = [];
    self.openData.y = [];
    self.num3Data.x = [];
    self.num3Data.y = [];
    self.num6Data.x = [];
    self.num6Data.y = [];
    self.num9Data.x = [];
    self.num9Data.y = [];
    self.num100Data.x = [];
    self.num100Data.y = [];
    self.num3iData.x = [];
    self.num3iData.y = [];
    self.num6iData.x = [];
    self.num6iData.y = [];
    self.num9iData.x = [];
    self.num9iData.y = [];
    self.num100iData.x = [];
    self.num100iData.y = [];
    self.chartDataService.collection(binSize, {
      symbol,
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
              self.num3Data.x.push(item['timestamp']);
              self.num3Data.y.push(item['num_3']);
              self.num6Data.x.push(item['timestamp']);
              self.num6Data.y.push(item['num_6']);
              self.num9Data.x.push(item['timestamp']);
              self.num9Data.y.push(item['num_9']);
              self.num100Data.x.push(item['timestamp']);
              self.num100Data.y.push(item['num_100']);
              self.num3iData.x.push(item['timestamp']);
              self.num3iData.y.push(item['num_3i']);
              self.num6iData.x.push(item['timestamp']);
              self.num6iData.y.push(item['num_6i']);
              self.num9iData.x.push(item['timestamp']);
              self.num9iData.y.push(item['num_9i']);
              self.num100iData.x.push(item['timestamp']);
              self.num100iData.y.push(item['num_100i']);
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
