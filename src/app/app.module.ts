import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PriceChartComponent} from './home/price-chart/price-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    SigninComponent,
    SignupComponent,
    HomeLayoutComponent,
    DashboardComponent,
    PriceChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    Title,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
