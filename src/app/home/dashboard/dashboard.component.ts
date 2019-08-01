import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "@app/_services";
import strings from '@core/strings';

@Component({
  selector: 'home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pageTitle = strings.dashboard;
  strings = strings;
  form: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
    });

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
