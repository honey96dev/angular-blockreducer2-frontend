import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {first} from "rxjs/operators";
import {MarketSentimentChartDataService} from "@app/_services/market-sentiment-chart-data.service";

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
                     private chartDataService: MarketSentimentChartDataService) {
    titleService.setTitle(`${strings.marketSentiment} ${strings.logarithmicChart}-${strings.siteName}`);
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
    const self = this;
    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;

    const symbol = 'XBTUSD';
    const binSize = this.f.binSize.value;
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(this.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(this.f.endTime.value, 'yyyy-MM-dd');
    const timezone = this.f.timezone.value;

    this.openData.x = [];
    this.openData.y = [];
    this.num3Data.x = [];
    this.num3Data.y = [];
    this.num6Data.x = [];
    this.num6Data.y = [];
    this.num9Data.x = [];
    this.num9Data.y = [];
    this.num100Data.x = [];
    this.num100Data.y = [];
    this.num3iData.x = [];
    this.num3iData.y = [];
    this.num6iData.x = [];
    this.num6iData.y = [];
    this.num9iData.x = [];
    this.num9iData.y = [];
    this.num100iData.x = [];
    this.num100iData.y = [];
    this.chartDataService.collection(binSize, {
      symbol,
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
              this.openData.x.push(item['timestamp']);
              this.openData.y.push(item['open']);
              this.num3Data.x.push(item['timestamp']);
              this.num3Data.y.push(item['num_3']);
              this.num6Data.x.push(item['timestamp']);
              this.num6Data.y.push(item['num_6']);
              this.num9Data.x.push(item['timestamp']);
              this.num9Data.y.push(item['num_9']);
              this.num100Data.x.push(item['timestamp']);
              this.num100Data.y.push(item['num_100']);
              this.num3iData.x.push(item['timestamp']);
              this.num3iData.y.push(item['num_3i']);
              this.num6iData.x.push(item['timestamp']);
              this.num6iData.y.push(item['num_6i']);
              this.num9iData.x.push(item['timestamp']);
              this.num9iData.y.push(item['num_9i']);
              this.num100iData.x.push(item['timestamp']);
              this.num100iData.y.push(item['num_100i']);
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
      });
  }
}
