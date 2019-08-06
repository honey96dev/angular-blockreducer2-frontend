import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';
import {User} from '@app/_models';

@Injectable({providedIn: 'root'})
export class DashboardService {
  constructor(private http: HttpClient) {
  }

  public get currentSymbol(): string {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser.length > 0) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return !!currentUser['symbol'] ? currentUser['symbol'] : 'XBTUSD';
  }

  public setCurrentSymbol(symbol: string) {
    let currentUser = localStorage.getItem('currentUser');
    if (currentUser.length > 0) {
      currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    return this.http.post<any>(`${environment.apiUrl}${apis.dashboard.currentSymbol}`, {userId: currentUser['id'], symbol: symbol})
      .pipe(map(res => {
        if (res.result == 'success') {
          currentUser['symbol'] = symbol;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }

        return res;
      }));
  }
}
