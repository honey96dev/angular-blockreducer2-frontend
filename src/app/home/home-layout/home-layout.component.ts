import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@app/_services";
import {User} from "@app/_models";
import strings from '@core/strings';
import {Router} from "@angular/router";
import {environment} from "@environments/environment";
import SocketIOClient from 'socket.io-client';

let homeLayout;

@Component({
  selector: 'home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  strings = strings;
  user: User;

  ioClient = SocketIOClient(environment.socketIOUrl, {
    reconnection: true,
    reconnectionDelay: 2000,
    reconnectionDelayMax: 4000,
    reconnectionAttempts: Infinity
  });
  pingTimoutId = undefined;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = this.authenticationService.currentUserValue;
    homeLayout = this;
  }

  ngOnInit() {
    this.ioClient.on('connect', () => {
      this.ping();
    });
  }

  ping() {
    if (homeLayout.pingTimoutId) {
      clearTimeout(homeLayout.pingTimoutId);
    }
    homeLayout.pingTimoutId = setTimeout(homeLayout.ping, environment.pingTimeoutDelay);
    // let data = Object.assign({}, homeLayout.user, {url: homeLayout.rout})
    homeLayout.ioClient.emit('user-timestamp', homeLayout.user);
    // homeLayout.ioClient.emit('user-timestamp', this.authenticationService.currentUserValue);
    console.log('user-timestamp', JSON.stringify(homeLayout.user));
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.router.navigate(['/auth']);
    homeLayout.ioClient.emit('user-signout', homeLayout.user);
  }
}
