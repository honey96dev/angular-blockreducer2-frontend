import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";

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

    this.openData.x = [];
    this.openData.y = [];
    this.volumeData.x = [];
    this.volumeData.y = [];
    this.volumeSumData.x = [];
    this.volumeSumData.y = [];

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
              this.openData.x.push(item['timestamp']);
              this.openData.y.push(item['open']);
              this.volumeData.x.push(item['timestamp']);
              this.volumeData.y.push(item['volume']);
              this.volumeSumData.x.push(item['timestamp']);
              this.volumeSumData.y.push(item['volumeSum']);
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
        this.openData.x = [];
        this.openData.y = [];
        this.openInterestData.x = [];
        this.openInterestData.y = [];
        this.openValueData.x = [];
        this.openValueData.y = [];
      });

    this.open2Data.x = [];
    this.open2Data.y = [];
    this.openInterestData.x = [];
    this.openInterestData.y = [];
    this.openValueData.x = [];
    this.openValueData.y = [];

    this.chartDataService.volume2({
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
              this.open2Data.x.push(item['timestamp']);
              this.open2Data.y.push(item['open']);
              this.openInterestData.x.push(item['timestamp']);
              this.openInterestData.y.push(item['openInterest']);
              this.openValueData.x.push(item['timestamp']);
              this.openValueData.y.push(item['openValue']);
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
        this.open2Data.x = [];
        this.open2Data.y = [];
        this.openInterestData.x = [];
        this.openInterestData.y = [];
        this.openValueData.x = [];
        this.openValueData.y = [];
      });
  }
}
