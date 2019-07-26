import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class MarketSentimentChartDataService {

  constructor(private http: HttpClient) {
  }

  one(binSize, params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.marketSentiment.one}/${binSize}`, {params})
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
