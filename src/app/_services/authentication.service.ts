import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '@environments/environment';
import {apis} from '@core/apis';
import {User} from '@app/_models';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  signIn(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}${apis.auth.signIn}`, {email, password})
      .pipe(map(res => {
        if (res.result == 'success') {
          console.log(res.data);
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          this.currentUserSubject.next(res.data);
        }

        return res;
      }));
  }

  signUp(payload: object) {
    return this.http.post<any>(`${environment.apiUrl}${apis.auth.signUp}`, payload)
      .pipe(map(res => {
        return res;
      }));
  }

  signOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
