import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class ChartDataService {

  constructor(private http: HttpClient) {
  }

  price() {
    return this.http.post<any>(`${environment.apiUrl}${apis.auth.signIn}`, {})
      .pipe(map(res => {
        return res;
      }));
  }
}
