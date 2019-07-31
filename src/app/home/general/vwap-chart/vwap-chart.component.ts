import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";

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
                     private chartDataService: GeneralChartDataService) {
    titleService.setTitle(`${strings.volumeChart}-${strings.siteName}`);
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

    this.num_3.x = [];
    this.num_3.y = [];
    this.num_6.x = [];
    this.num_6.y = [];
    this.num_9.x = [];
    this.num_9.y = [];
    this.num_100.x = [];
    this.num_100.y = [];

    this.chartDataService.volume1({
      symbol,
      binSize,
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
              this.num_3.x.push(item.timestamp);
              this.num_3.y.push(item.num_3);
              this.num_6.x.push(item.timestamp);
              this.num_6.y.push(item.num_6);
              this.num_9.x.push(item.timestamp);
              this.num_9.y.push(item.num_9);
              this.num_100.x.push(item.timestamp);
              this.num_100.y.push(item.num_100);
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
