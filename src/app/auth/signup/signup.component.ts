import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "@app/_services";
import {first} from "rxjs/operators";
import {CheckForceValidator} from '@app/_helpers/check-force.validator';
import strings from '@core/strings';

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  strings = strings;
  form: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  arrow = {
    show: false,
    type: '',
    message: '',
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private route: ActivatedRoute,
                     private router: Router,
                     private authenticationService: AuthenticationService) {
    titleService.setTitle(`${strings.signUp}-${strings.siteName}`);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      invitationCode: ['', Validators.required],
      acceptTerm: ['', CheckForceValidator.validateCheck],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const firstName = this.f.firstName.value;
    const lastName = this.f.lastName.value;
    const email = this.f.email.value;
    const username = this.f.username.value;
    const password = this.f.password.value;
    const invitationCode = this.f.invitationCode.value;

    this.loading = true;
    const payload = {
      firstName,
      lastName,
      email,
      username,
      password,
      invitationCode,
    };
    this.authenticationService.signUp(payload)
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
        this.error = error;
        this.arrow = {
          show: true,
          type: 'danger',
          message: 'Unknown server error',
        };
      });
  }
}
