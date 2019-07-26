import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class ExchangeInfoDataService {

  constructor(private http: HttpClient) {
  }

  cryptoMarkets() {
    return this.http.get<any>(`${environment.apiUrl}${apis.exchangeInfo.cryptoMarkets}`, {})
      .pipe(map(res => {
        return res;
      }));
  }

  subscribe(params) {
    return this.http.post<any>(`${environment.apiUrl}${apis.exchangeInfo.subscribe}`, params)
      .pipe(map(res => {
        return res;
      }));
  }
}
