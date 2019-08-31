import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class FootprintDataService {

  constructor(private http: HttpClient) {
  }

  index(params) {
    return this.http.get<any>(`${environment.apiUrl}${apis.footprint.index}`, {params})
      .pipe(map(res => {
        return res;
      }));
  }
}
