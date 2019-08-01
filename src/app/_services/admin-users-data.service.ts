import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';

@Injectable({providedIn: 'root'})
export class AdminUsersDataService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<any>(`${environment.apiUrl}${apis.admin.users}`, {})
      .pipe(map(res => {
        return res;
      }));
  }

  add(params) {
    return this.http.post<any>(`${environment.apiUrl}${apis.admin.users}`, params)
      .pipe(map(res => {
        return res;
      }));
  }

  edit(params) {
    return this.http.put<any>(`${environment.apiUrl}${apis.admin.users}`, params)
      .pipe(map(res => {
        return res;
      }));
  }

  remove(params) {
    return this.http.delete<any>(`${environment.apiUrl}${apis.admin.users}`, {params: params})
      .pipe(map(res => {
        return res;
      }));
  }
}
