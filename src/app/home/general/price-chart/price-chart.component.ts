import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ChartDataService} from "@app/_services/chart-data.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {
  pageTitle = strings.priceChart;
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
  priceData = {
    x: [],
    y: [],
    type: 'scatter',
    // mode: 'lines+points',
    // marker: {color: 'red'}
  };
  graph = {
    data: [this.priceData],
    // data: [
    //   { x: this.priceData.x, y: this.priceData.y, type: 'scatter', mode: 'lines+points', marker: {color: 'red'} },
    // ],
    layout: {
      height: 850,
      autosize: true,
      // margin: {
      //   l: 40,
      //   r: 40,
      //   t: 30,
      //   b: 30,
      // },
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
    },
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private chartDataService: ChartDataService) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      startTime: [''],
      endTime: [''],
      timezone: ['', Validators.required],
    });
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

    const symbol = 'XBTUSD';
    const binSize = '5m';
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(this.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(this.f.endTime.value, 'yyyy-MM-dd');
    const timezone = this.f.timezone.value;

    console.log('time', startTime, endTime);
    this.chartDataService.price({
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

          this.priceData.x = [];
          this.priceData.y = [];
          for (let item of data) {
            this.priceData.x.push(item['timestamp']);
            this.priceData.y.push(item['open']);
          }
        } else {
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
          this.priceData.x = [];
          this.priceData.y = [];
        }
      }, error => {
        this.loading = false;
        this.error = error;
        this.arrow = {
          show: true,
          type: 'danger',
          message: 'Unknown server error',
        };
        this.priceData.x = [];
        this.priceData.y = [];
      });
  }
}
