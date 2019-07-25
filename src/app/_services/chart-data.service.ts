import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class ChartDataService {

  constructor(private http: HttpClient) {
  }

  price(params) {
    return this.http.post<any>(`${environment.apiUrl}${apis.general.price}`, params)
      .pipe(map(res => {
        return res;
      }));
  }
}
