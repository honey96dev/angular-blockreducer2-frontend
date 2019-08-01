import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {first} from "rxjs/operators";
import {VolatilityChartDataService} from "@app/_services/volatility-chart-data.service";
import {GlobalVariableService} from "@app/_services/global-variable.service";

let self;

@Component({
  selector: 'home-volatility-chart',
  templateUrl: './volatility-chart.component.html',
  styleUrls: ['./volatility-chart.component.scss']
})
export class VolatilityChartComponent implements OnInit {
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
  highPassData = {
    x: [],
    y: [],
    name: 'Residual Index',
    yaxis: 'y2',
    type: 'scatter',
  };
  lowPassData = {
    x: [],
    y: [],
    name: 'Volatility Index',
    yaxis: 'y2',
    type: 'scatter',
  };
  highPassGraph = {
    data: [this.openData, this.highPassData],
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
        title: 'Open',
        autorange: true,
      },
      yaxis2: {
        title: 'Residual Index',
        // titlefont: {color: 'rgb(148, 103, 189)'},
        // tickfont: {color: 'rgb(148, 103, 189)'},
        overlaying: 'y',
        side: 'right',
      }
    },
  };
  lowPassGraph = {
    data: [this.openData, this.lowPassData],
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
        title: 'Open',
        autorange: true,
      },
      yaxis2: {
        title: 'Volatility Index',
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
                     private chartDataService: VolatilityChartDataService) {
    titleService.setTitle(`${strings.volatilityChart}-${strings.siteName}`);
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
    console.log('volatility-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = 'XBTUSD';
    const binSize = self.f.binSize.value;
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.openData.x = [];
    self.openData.y = [];
    self.highPassData.x = [];
    self.highPassData.y = [];
    self.lowPassData.x = [];
    self.lowPassData.y = [];
    self.chartDataService.real(binSize, {
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
              self.highPassData.x.push(item['timestamp']);
              self.highPassData.y.push(item['highPass']);
              self.lowPassData.x.push(item['timestamp']);
              self.lowPassData.y.push(item['lowPass']);
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
