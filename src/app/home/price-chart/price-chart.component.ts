import {Component, OnInit} from '@angular/core';
import strings from "@core/strings";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'home-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.scss']
})
export class PriceChartComponent implements OnInit {
  pageTitle = strings.priceChart;
  strings = strings;
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    const self = this;
    this.submitted = true;
    this.loading = true;
    setTimeout(() => {
      self.loading = false;
    }, 2000);
  }
}
