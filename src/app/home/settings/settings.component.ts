import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import strings from '@core/strings';
import {AuthenticationService, SettingsService} from "@app/_services";
import {User} from "@app/_models";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  strings = strings;
  user: User;
  passwordChangeForm: FormGroup;
  loading = false;
  submitted = false;
  passwordArrow = {
    show: false,
    type: '',
    message: '',
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private authenticationService: AuthenticationService,
                     private service: SettingsService,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.dashboard}-${strings.siteName}`);
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.passwordChangeForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.passwordChangeForm.controls;
  }

  onChangePassword() {
    const self = this;
    self.submitted = true;
    this.passwordArrow.show = false;
    if (self.passwordChangeForm.invalid) {
      return;
    }

    self.loading = true;

    const currentPassword = this.f.currentPassword.value;
    const newPassword = this.f.newPassword.value;
    const confirmPassword = this.f.confirmPassword.value;
    self.service.password({
      userId: self.user.id,
      currentPassword,
      newPassword,
    })
      .pipe(first())
      .subscribe(res => {
        this.loading = false;
        this.passwordArrow.show = false;

        if (res.result == 'success') {
          this.passwordArrow = {
            show: true,
            type: 'success',
            message: res.message,
          };
        } else {
          this.passwordArrow = {
            show: true,
            type: 'danger',
            message: res.message,
          };
        }
      }, error => {
        this.loading = false;
        this.passwordArrow = {
          show: true,
          type: 'danger',
          message: strings.unkbownServerError,
        };
      });
  }
}
