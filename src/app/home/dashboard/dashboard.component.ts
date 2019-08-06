import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "@app/_services";
import strings from '@core/strings';
import {User} from "@app/_models";
import {DashboardService} from "@app/_services/dashboard.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    {label: 'Bitcoin', value: 'XBTUSD'},
    {label: 'Ethereum', value: 'tETHUSD'},
    {label: 'Bitcoin Cash', value: 'tBABUSD'},
    {label: 'EOS', value: 'tEOSUSD'},
    {label: 'Litecoin', value: 'tLTCUSD'},
    {label: 'Bitcoin SV', value: 'tBSVUSD'},
  ];
  symbol: string;

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private authenticationService: AuthenticationService,
                     private service: DashboardService,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
    this.user = this.authenticationService.currentUserValue;
    this.symbol = this.service.currentSymbol;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      symbol: ['', Validators.required],
      // currentPassword: ['', Validators.required],
      // newPassword: ['', Validators.required],
      // confirmPassword: ['', Validators.required],
    });

    this.f.symbol.setValue(this.symbol);
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const self = this;
    this.submitted = true;
    this.loading = true;

    const symbol = this.f.symbol.value;
    this.service.setCurrentSymbol(symbol)
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
