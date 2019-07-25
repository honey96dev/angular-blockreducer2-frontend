import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@app/_services";
import {User} from "@app/_models";
import strings from '@core/strings';
import {Router} from "@angular/router";

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  strings = strings;
  user: User;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.router.navigate(['/auth']);
  }
}
