import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {DeribitChartDataService} from "@app/_services/deribit-chart-data.service";
import {first} from "rxjs/operators";
import {GlobalVariableService} from "@app/_services/global-variable.service";

let self;

@Component({
  selector: 'home-deribit-option1-chart',
  templateUrl: './deribit-option1-chart.component.html',
  styleUrls: ['./deribit-option1-chart.component.scss']
})
export class DeribitOption1ChartComponent implements OnInit {
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

  strikeKDECallData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
      dash: 'dash',
    },
    name: 'Call',
    type: 'scatter',
    fill: 'tozeroy',
  };
  strikeKDEPutData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };

  bidStrikeCallData = {
    x: [],
    y: [],
    name: 'Call',
    mode: 'markers',
    marker: {
      symbol: "circle",
      opacity: 0.7,
      size: 7.5,
    },
    type: 'scatter',
  };
  bidStrikePutData = {
    x: [],
    y: [],
    name: 'Put',
    mode: 'markers',
    marker: {
      symbol: 134,
      opacity: 0.7,
      size: 9,
    },
    type: 'scatter',
  };

  bidKDECallData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
      dash: 'dash',
    },
    name: 'Call',
    type: 'scatter',
    fill: 'tozeroy',
  };
  bidKDEPutData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };

  deltaStrikeCallData = {
    x: [],
    y: [],
    name: 'Call',
    mode: 'markers',
    marker: {
      symbol: "circle",
      opacity: 0.7,
      size: 7.5,
    },
    type: 'scatter',
  };
  deltaStrikePutData = {
    x: [],
    y: [],
    name: 'Put',
    mode: 'markers',
    marker: {
      symbol: 134,
      opacity: 0.7,
      size: 9,
    },
    type: 'scatter',
  };

  deltaBidCallData = {
    x: [],
    y: [],
    name: 'Call',
    mode: 'markers',
    marker: {
      symbol: "circle",
      opacity: 0.7,
      size: 7.5,
    },
    type: 'scatter',
  };
  deltaBidPutData = {
    x: [],
    y: [],
    name: 'Put',
    mode: 'markers',
    marker: {
      symbol: 134,
      opacity: 0.7,
      size: 9,
    },
    type: 'scatter',
  };

  deltaKDECallData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
      dash: 'dash',
    },
    name: 'Call',
    type: 'scatter',
    fill: 'tozeroy',
  };
  deltaKDEPutData = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };


  strikeKDEGraph = {
    data: [
      this.strikeKDEPutData, this.strikeKDECallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Strike',
        type: 'linear',
      },
      yaxis: {
        title: 'Strike',
        autorange: true,
        type: 'linear',
      },
    },
  };
  bidStrikeGraph = {
    data: [
      this.bidStrikePutData, this.bidStrikeCallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Strike',
        type: 'linear',
      },
      yaxis: {
        title: 'Bid',
        autorange: true,
        type: 'linear',
      },
    },
  };
  bidKDEGraph = {
    data: [
      this.bidKDEPutData, this.bidKDECallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Bid',
        type: 'linear',
      },
      yaxis: {
        title: 'Bid',
        autorange: true,
        type: 'linear',
      },
    },
  };
  deltaStrikeGraph = {
    data: [
      this.deltaStrikePutData, this.deltaStrikeCallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Strike',
        type: 'linear',
      },
      yaxis: {
        title: 'Delta',
        autorange: true,
        type: 'linear',
      },
    },
  };
  deltaBidGraph = {
    data: [
      this.deltaBidPutData, this.deltaBidCallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Bid',
        type: 'linear',
      },
      yaxis: {
        title: 'Delta',
        autorange: true,
        type: 'linear',
      },
    },
  };
  deltaKDEGraph = {
    data: [
      this.deltaKDEPutData, this.deltaKDECallData,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Delta',
        type: 'linear',
      },
      yaxis: {
        title: 'Delta',
        autorange: true,
        type: 'linear',
      },
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private chartDataService: DeribitChartDataService) {
    titleService.setTitle(`${strings.deribitInformation} ${strings.option1}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });
    this.onSubmit();
  }

  onSubmit() {
    if (self.globalsService.chartTimeoutId) {
      clearTimeout(self.globalsService.chartTimeoutId);
    }
    console.log('deribit-option1-chart', new Date());

    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;

    this.strikeKDECallData.x = [];
    this.strikeKDECallData.y = [];
    this.strikeKDEPutData.x = [];
    this.strikeKDEPutData.y = [];
    this.bidStrikeCallData.x = [];
    this.bidStrikeCallData.y = [];
    this.bidStrikePutData.x = [];
    this.bidStrikePutData.y = [];
    this.bidKDECallData.x = [];
    this.bidKDECallData.y = [];
    this.bidKDEPutData.x = [];
    this.bidKDEPutData.y = [];
    this.deltaStrikeCallData.x = [];
    this.deltaStrikeCallData.y = [];
    this.deltaStrikePutData.x = [];
    this.deltaStrikePutData.y = [];
    this.deltaBidCallData.x = [];
    this.deltaBidCallData.y = [];
    this.deltaBidPutData.x = [];
    this.deltaBidPutData.y = [];
    this.deltaKDECallData.x = [];
    this.deltaKDECallData.y = [];
    this.deltaKDEPutData.x = [];
    this.deltaKDEPutData.y = [];

    this.chartDataService.instruments()
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
            for (let item of res.strikeKDECall) {
              this.strikeKDECallData.x.push(item.value);
              this.strikeKDECallData.y.push(item.density);
            }
            for (let item of res.strikeKDEPut) {
              this.strikeKDEPutData.x.push(item.value);
              this.strikeKDEPutData.y.push(item.density);
            }
            for (let item of res.bidKDECall) {
              this.bidKDECallData.x.push(item.value);
              this.bidKDECallData.y.push(item.density);
            }
            for (let item of res.bidKDEPut) {
              this.bidKDEPutData.x.push(item.value);
              this.bidKDEPutData.y.push(item.density);
            }
            for (let item of res.deltaKDECall) {
              this.deltaKDECallData.x.push(item.value);
              this.deltaKDECallData.y.push(item.density);
            }
            for (let item of res.deltaKDEPut) {
              this.deltaKDEPutData.x.push(item.value);
              this.deltaKDEPutData.y.push(item.density);
            }

            for (let item of data) {
              if (item.type == 'Call') {
                this.bidStrikeCallData.x.push(item.strike);
                this.bidStrikeCallData.y.push(item.best_bid_price);

                this.deltaStrikeCallData.x.push(item.strike);
                this.deltaStrikeCallData.y.push(item.delta);
                this.deltaBidCallData.x.push(item.best_bid_price);
                this.deltaBidCallData.y.push(item.delta);
              }
              if (item.type == 'Put') {
                this.bidStrikePutData.x.push(item.strike);
                this.bidStrikePutData.y.push(item.best_bid_price);

                this.deltaStrikePutData.x.push(item.strike);
                this.deltaStrikePutData.y.push(item.delta);
                this.deltaBidPutData.x.push(item.best_bid_price);
                this.deltaBidPutData.y.push(item.delta);

              }
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

    let timeoutDelay = 2 * 60 * 1000;
    self.globalsService.chartTimeoutId = setTimeout(self.onSubmit, timeoutDelay);
  }
}
