import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {DeribitChartDataService} from "@app/_services/deribit-chart-data.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-deribit-option2-chart',
  templateUrl: './deribit-option2-chart.component.html',
  styleUrls: ['./deribit-option2-chart.component.scss']
})
export class DeribitOption2ChartComponent implements OnInit {
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

  gammaStrikeCall = {
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
  gammaStrikePut = {
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

  gammaBidCall = {
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
  gammaBidPut = {
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

  gammaDeltaCall = {
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
  gammaDeltaPut = {
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

  gammaKDECall = {
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
  gammaKDEPut = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };

  vegaStrikeCall = {
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
  vegaStrikePut = {
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

  vegaBidCall = {
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
  vegaBidPut = {
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

  vegaDeltaCall = {
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
  vegaDeltaPut = {
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

  vegaGammaCall = {
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
  vegaGammaPut = {
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

  vegaKDECall = {
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
  vegaKDEPut = {
    x: [],
    y: [],
    line: {
      shape: 'spline',
    },
    name: 'Put',
    type: 'scatter',
    fill: 'tonexty',
  };

  gammaStrikeGraph = {
    data: [
      this.gammaStrikePut, this.gammaStrikeCall,
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
        title: 'Gamma',
        autorange: true,
        type: 'linear',
      },
    },
  };
  gammaBidGraph = {
    data: [
      this.gammaBidPut, this.gammaBidCall,
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
        title: 'Gamma',
        autorange: true,
        type: 'linear',
      },
    },
  };
  gammaDeltaGraph = {
    data: [
      this.gammaDeltaPut, this.gammaDeltaCall,
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
        title: 'Gamma',
        autorange: true,
        type: 'linear',
      },
    },
  };
  gammaKDEGraph = {
    data: [
      this.gammaKDEPut, this.gammaKDECall,
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
        title: 'Gamma',
        autorange: true,
        type: 'linear',
      },
    },
  };
  vegaStrikeGraph = {
    data: [
      this.vegaStrikePut, this.vegaStrikeCall,
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
        title: 'Strike',
        autorange: true,
        type: 'linear',
      },
    },
  };
  vegaBidGraph = {
    data: [
      this.vegaBidPut, this.vegaBidCall,
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
        title: 'Bid',
        autorange: true,
        type: 'linear',
      },
    },
  };
  vegaDeltaGraph = {
    data: [
      this.vegaDeltaPut, this.vegaDeltaCall,
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
        title: 'Delta',
        autorange: true,
        type: 'linear',
      },
    },
  };
  vegaGammaGraph = {
    data: [
      this.vegaGammaPut, this.vegaGammaCall,
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
        title: 'Gamma',
        autorange: true,
        type: 'linear',
      },
    },
  };
  vegaKDEGraph = {
    data: [
      this.vegaKDEPut, this.vegaKDECall,
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
        title: 'Vega',
        autorange: true,
        type: 'linear',
      },
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private chartDataService: DeribitChartDataService) {
    titleService.setTitle(`${strings.deribitInformation} ${strings.option2}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });
    this.onSubmit();
  }

  onSubmit() {
    const self = this;
    this.submitted = true;
    this.loading = true;
    this.arrow.show = false;
    this.gammaStrikeCall.x = [];
    this.gammaStrikeCall.y = [];
    this.gammaStrikePut.x = [];
    this.gammaStrikePut.y = [];
    this.gammaBidCall.x = [];
    this.gammaBidCall.y = [];
    this.gammaBidPut.x = [];
    this.gammaBidPut.y = [];
    this.gammaDeltaCall.x = [];
    this.gammaDeltaCall.y = [];
    this.gammaDeltaPut.x = [];
    this.gammaDeltaPut.y = [];
    this.gammaKDECall.x = [];
    this.gammaKDECall.y = [];
    this.gammaKDEPut.x = [];
    this.gammaKDEPut.y = [];
    this.vegaStrikeCall.x = [];
    this.vegaStrikeCall.y = [];
    this.vegaStrikePut.x = [];
    this.vegaStrikePut.y = [];
    this.vegaBidCall.x = [];
    this.vegaBidCall.y = [];
    this.vegaBidPut.x = [];
    this.vegaBidPut.y = [];
    this.vegaDeltaCall.x = [];
    this.vegaDeltaCall.y = [];
    this.vegaDeltaPut.x = [];
    this.vegaDeltaPut.y = [];
    this.vegaGammaCall.x = [];
    this.vegaGammaCall.y = [];
    this.vegaGammaPut.x = [];
    this.vegaGammaPut.y = [];
    this.vegaKDECall.x = [];
    this.vegaKDECall.y = [];
    this.vegaKDEPut.x = [];
    this.vegaKDEPut.y = [];

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
            for (let item of res.gammaKDECall) {
              this.gammaKDECall.x.push(item.value);
              this.gammaKDECall.y.push(item.density);
            }
            for (let item of res.gammaKDEPut) {
              this.gammaKDEPut.x.push(item.value);
              this.gammaKDEPut.y.push(item.density);
            }
            for (let item of res.vegaKDECall) {
              this.vegaKDECall.x.push(item.value);
              this.vegaKDECall.y.push(item.density);
            }
            for (let item of res.vegaKDEPut) {
              this.vegaKDEPut.x.push(item.value);
              this.vegaKDEPut.y.push(item.density);
            }

            for (let item of data) {
              let spread = item.best_ask_price - item.best_bid_price;
              // if (spread > limitSpread) spread = 0;
              if (item.type == 'Call') {
                this.gammaStrikeCall.x.push(item.strike);
                this.gammaStrikeCall.y.push(item.gamma);
                this.gammaBidCall.x.push(item.best_bid_price);
                this.gammaBidCall.y.push(item.gamma);
                this.gammaDeltaCall.x.push(item.delta);
                this.gammaDeltaCall.y.push(item.gamma);

                this.vegaStrikeCall.x.push(item.strike);
                this.vegaStrikeCall.y.push(item.vega);
                this.vegaBidCall.x.push(item.best_bid_price);
                this.vegaBidCall.y.push(item.vega);
                this.vegaDeltaCall.x.push(item.delta);
                this.vegaDeltaCall.y.push(item.vega);
                this.vegaGammaCall.x.push(item.gamma);
                this.vegaGammaCall.y.push(item.vega);
              }
              if (item.type == 'Put') {
                this.gammaStrikePut.x.push(item.strike);
                this.gammaStrikePut.y.push(item.gamma);
                this.gammaBidPut.x.push(item.best_bid_price);
                this.gammaBidPut.y.push(item.gamma);
                this.gammaDeltaPut.x.push(item.delta);
                this.gammaDeltaPut.y.push(item.gamma);

                this.vegaStrikePut.x.push(item.strike);
                this.vegaStrikePut.y.push(item.vega);
                this.vegaBidPut.x.push(item.best_bid_price);
                this.vegaBidPut.y.push(item.vega);
                this.vegaDeltaPut.x.push(item.delta);
                this.vegaDeltaPut.y.push(item.vega);
                this.vegaGammaPut.x.push(item.gamma);
                this.vegaGammaPut.y.push(item.vega);
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
  }
}
