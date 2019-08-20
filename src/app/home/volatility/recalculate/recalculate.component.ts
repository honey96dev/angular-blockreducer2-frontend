import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import strings from '@core/strings';
import {AuthenticationService, SettingsService, VolatilityChartDataService} from "@app/_services";
import {User} from "@app/_models";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-volatility-recalculate',
  templateUrl: './recalculate.component.html',
  styleUrls: ['./recalculate.component.scss']
})
export class VolatilityRecalculateComponent implements OnInit {
  strings = strings;
  user: User;
  form: FormGroup;
  loading = false;
  submitted = false;
  arrow = {
    show: false,
    type: '',
    message: '',
  };

  symbols = [
    {label: '', value: null},
    {label: 'Bitcoin', value: 'XBTUSD'},
    {label: 'Ethereum', value: 'tETHUSD'},
    {label: 'Bitcoin Cash', value: 'tBABUSD'},
    {label: 'EOS', value: 'tEOSUSD'},
    {label: 'Litecoin', value: 'tLTCUSD'},
    {label: 'Bitcoin SV', value: 'tBSVUSD'},
  ];

  binSizes = [
    // {label: '1m', value: '1m'},
    {label: '', value: null},
    {label: '5m', value: '5m'},
    {label: '1h', value: '1h'},
  ];

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private authenticationService: AuthenticationService,
                     private service: VolatilityChartDataService,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      symbol: ['', Validators.required],
      binSize: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
    });

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const self = this;
    self.submitted = true;
    this.arrow.show = false;
    if (self.form.invalid) {
      return;
    }

    self.loading = true;

    const symbol = this.f.symbol.value;
    const binSize = this.f.binSize.value;
    const startTime = this.f.startTime.value;
    const endTime = this.f.endTime.value;
    self.service.recalculate(binSize, {
      symbol,
      startTime,
      endTime,
    })
      .pipe(first())
      .subscribe(res => {
        this.loading = false;
        this.arrow.show = false;

        if (res.result == 'success') {
          this.arrow = {
            show: true,
            type: 'success',
            message: res.message,
          };
        } else {
          this.arrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        this.loading = false;
        this.arrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
      });
  }
}
