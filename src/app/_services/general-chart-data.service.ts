import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class GeneralChartDataService {

  constructor(private http: HttpClient) {
  }

  price(params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.general.price}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }

  volume1(params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.general.volume1}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }

  volume2(params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.general.volume2}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }

  ohlc(params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.general.ohlc}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }
}
