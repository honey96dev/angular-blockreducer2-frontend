import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import strings from '@core/strings';
import {AuthenticationService, SettingsService} from "@app/_services";
import {User} from "@app/_models";
import {first} from "rxjs/operators";

@Component({
  selector: 'home-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  strings = strings;
  arrow = {
    show: false,
    type: '',
    message: '',
  };

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private service: SettingsService,
                     private route: ActivatedRoute,) {
    titleService.setTitle(`${strings.userManagement}-${strings.siteName}`);
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  // get f() {
    // return this.passwordChangeForm.controls;
  // }

}
