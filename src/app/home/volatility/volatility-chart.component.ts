import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {first} from "rxjs/operators";
import {VolatilityChartDataService} from "@app/_services/volatility-chart-data.service";

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
                     private chartDataService: VolatilityChartDataService) {
    titleService.setTitle(`${strings.volatilityChart}-${strings.siteName}`);
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
    this.highPassData.x = [];
    this.highPassData.y = [];
    this.lowPassData.x = [];
    this.lowPassData.y = [];
    this.chartDataService.real(binSize, {
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
              this.highPassData.x.push(item['timestamp']);
              this.highPassData.y.push(item['highPass']);
              this.lowPassData.x.push(item['timestamp']);
              this.lowPassData.y.push(item['lowPass']);
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
