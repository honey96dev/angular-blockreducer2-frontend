import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {DashboardService} from "@app/_services/dashboard.service";

let self;

@Component({
  selector: 'home-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {
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
  symbol = this.dashboardService.currentSymbol;
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
                     private globalsService: GlobalVariableService,
                     private dashboardService: DashboardService,
                     private chartDataService: GeneralChartDataService) {
    titleService.setTitle(`${strings.priceChart}-${strings.siteName}`);
    self = this;
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
    if (self.globalsService.chartTimeoutId) {
      clearTimeout(self.globalsService.chartTimeoutId);
    }
    console.log('price-chart', new Date());

    self.submitted = true;
    self.loading = true;
    self.arrow.show = false;

    const symbol = self.dashboardService.currentSymbol;
    const binSize = '5m';
    const datePipe = new DatePipe('en');
    const startTime = datePipe.transform(self.f.startTime.value, 'yyyy-MM-dd');
    const endTime = datePipe.transform(self.f.endTime.value, 'yyyy-MM-dd');
    const timezone = self.f.timezone.value;

    self.priceData.x = [];
    self.priceData.y = [];
    self.chartDataService.price({
      symbol,
      binSize,
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
              self.priceData.x.push(item['timestamp']);
              self.priceData.y.push(item['open']);
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
        self.priceData.x = [];
        self.priceData.y = [];
      });

    let timeoutDelay = 2 * 60 * 1000;
    self.globalsService.chartTimeoutId = setTimeout(self.onSubmit, timeoutDelay);
  }
}
