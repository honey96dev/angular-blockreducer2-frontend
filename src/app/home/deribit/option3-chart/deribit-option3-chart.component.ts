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
  selector: 'home-deribit-option3-chart',
  templateUrl: './deribit-option3-chart.component.html',
  styleUrls: ['./deribit-option3-chart.component.scss']
})
export class DeribitOption3ChartComponent implements OnInit {
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

  spreadStrikeCall = {
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
  spreadStrikePut = {
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

  spreadBidCall = {
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
  spreadBidPut = {
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

  spreadDeltaCall = {
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
  spreadDeltaPut = {
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

  spreadGammaCall = {
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
  spreadGammaPut = {
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

  spreadVegaCall = {
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
  spreadVegaPut = {
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

  spreadKDECall = {
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
  spreadKDEPut = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };


  spreadStrikeGraph = {
    data: [
      this.spreadStrikePut, this.spreadStrikeCall,
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
        title: 'Spread',
        autorange: true,
        type: 'linear',
      },
    },
  };
  spreadBidGraph = {
    data: [
      this.spreadBidPut, this.spreadBidCall,
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
        title: 'Spread',
        autorange: true,
        type: 'linear',
      },
    },
  };
  spreadDeltaGraph = {
    data: [
      this.spreadDeltaPut, this.spreadDeltaCall,
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
        title: 'Spread',
        autorange: true,
        type: 'linear',
      },
    },
  };
  spreadGammaGraph = {
    data: [
      this.spreadGammaPut, this.spreadGammaCall,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Gamma',
        type: 'linear',
      },
      yaxis: {
        title: 'Spread',
        autorange: true,
        type: 'linear',
      },
    },
  };
  spreadVegaGraph = {
    data: [
      this.spreadVegaPut, this.spreadVegaCall,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Vega',
        type: 'linear',
      },
      yaxis: {
        title: 'Spread',
        autorange: true,
        type: 'linear',
      },
    },
  };
  spreadKDEGraph = {
    data: [
      this.spreadKDEPut, this.spreadKDECall,
    ],
    layout: {
      height: 500,
      autosize: true,
      xaxis: {
        autorange: true,
        title: 'Spread',
        type: 'linear',
      },
      yaxis: {
        title: 'Spread',
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
    console.log('deribit-option2-chart', new Date());

    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;

    this.spreadStrikeCall.x = [];
    this.spreadStrikeCall.y = [];
    this.spreadStrikePut.x = [];
    this.spreadStrikePut.y = [];
    this.spreadBidCall.x = [];
    this.spreadBidCall.y = [];
    this.spreadBidPut.x = [];
    this.spreadBidPut.y = [];
    this.spreadDeltaCall.x = [];
    this.spreadDeltaCall.y = [];
    this.spreadDeltaPut.x = [];
    this.spreadDeltaPut.y = [];
    this.spreadGammaCall.x = [];
    this.spreadGammaCall.y = [];
    this.spreadGammaPut.x = [];
    this.spreadGammaPut.y = [];
    this.spreadVegaCall.x = [];
    this.spreadVegaCall.y = [];
    this.spreadVegaPut.x = [];
    this.spreadVegaPut.y = [];
    this.spreadKDECall.x = [];
    this.spreadKDECall.y = [];
    this.spreadKDEPut.x = [];
    this.spreadKDEPut.y = [];

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
            for (let item of res.spreadKDECall) {
              this.spreadKDECall.x.push(item.value);
              this.spreadKDECall.y.push(item.density);
            }
            for (let item of res.spreadKDEPut) {
              this.spreadKDEPut.x.push(item.value);
              this.spreadKDEPut.y.push(item.density);
            }

            for (let item of data) {
              let spread = item.best_ask_price - item.best_bid_price;
              if (item.type == 'Call') {
                this.spreadStrikeCall.x.push(item.strike);
                this.spreadStrikeCall.y.push(spread);
                this.spreadBidCall.x.push(item.best_bid_price);
                this.spreadBidCall.y.push(spread);
                this.spreadDeltaCall.x.push(item.delta);
                this.spreadDeltaCall.y.push(spread);
                this.spreadGammaCall.x.push(item.gamma);
                this.spreadGammaCall.y.push(spread);
                this.spreadVegaCall.x.push(item.vega);
                this.spreadVegaCall.y.push(spread);
              }
              if (item.type == 'Put') {
                this.spreadStrikePut.x.push(item.strike);
                this.spreadStrikePut.y.push(spread);
                this.spreadBidPut.x.push(item.best_bid_price);
                this.spreadBidPut.y.push(spread);
                this.spreadDeltaPut.x.push(item.delta);
                this.spreadDeltaPut.y.push(spread);
                this.spreadGammaPut.x.push(item.gamma);
                this.spreadGammaPut.y.push(spread);
                this.spreadVegaPut.x.push(item.vega);
                this.spreadVegaPut.y.push(spread);
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
