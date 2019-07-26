import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class DeribitChartDataService {

  constructor(private http: HttpClient) {
  }

  instruments() {
    return this.http.get<any>(`${environment.apiUrl}${apis.deribit.instruments}`, {})
      .pipe(map(res => {
        return res;
      }));
  }
}
