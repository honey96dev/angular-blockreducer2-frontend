import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class VolatilityChartDataService {

  constructor(private http: HttpClient) {
  }

  real(binSize, params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.volatility.real}/${binSize}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }

  collection(binSize, params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.marketSentiment.collection}/${binSize}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }
}
