import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@app/_services";
import {User} from "@app/_models";

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
