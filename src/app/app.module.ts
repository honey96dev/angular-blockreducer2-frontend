import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSortModule,
  MatIconModule,
  MatTabsModule, MatDialogModule
} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import {PlotlyModule} from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {MatchValueDirective} from "@app/_helpers/match-value.directive";

import {AppComponent} from './app.component';
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PriceChartComponent} from './home/general/price-chart/price-chart.component';
import {VolumeChartComponent} from './home/general/volume-chart/volume-chart.component';
import {OhlcChartComponent} from "@app/home/general/ohlc-chart/ohlc-chart.component";
import {VolatilityChartComponent} from "@app/home/volatility/chart/volatility-chart.component";
import {MarketLinearChartComponent} from "@app/home/market-sentiment/linear/market-linear-chart.component";
import {MarketLogarithmicChartComponent} from "@app/home/market-sentiment/logarithmic/market-logarithmic-chart.component";
import {ExchangeInfoComponent} from "@app/home/exchange-info/exchange-info.component";
import {DeribitOption1ChartComponent} from "@app/home/deribit/option1-chart/deribit-option1-chart.component";
import {DeribitOption2ChartComponent} from "@app/home/deribit/option2-chart/deribit-option2-chart.component";
import {DeribitOption3ChartComponent} from "@app/home/deribit/option3-chart/deribit-option3-chart.component";
import {VwapChartComponent} from "@app/home/general/vwap-chart/vwap-chart.component";
import {SettingsComponent} from "@app/home/settings/settings.component";
import {CheckForceValidator} from "@app/_helpers/check-force.validator";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {
  AdminUsersComponent,
  AdminUsersDeleteDialog,
  AdminUsersEditDialog
} from "@app/home/admin/users/admin-users.component";
import {AdminPanelComponent} from "@app/home/admin/panel/admin-panel.component";
import {VolatilityRecalculateComponent} from "@app/home/volatility/recalculate/recalculate.component";

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    CheckForceValidator,
    MatchValueDirective,
    AppComponent,
    AuthLayoutComponent,
    SigninComponent,
    SignupComponent,
    HomeLayoutComponent,
    DashboardComponent,
    PriceChartComponent,
    VolumeChartComponent,
    VwapChartComponent,
    OhlcChartComponent,
    VolatilityChartComponent,
    VolatilityRecalculateComponent,
    MarketLinearChartComponent,
    MarketLogarithmicChartComponent,
    ExchangeInfoComponent,
    DeribitOption1ChartComponent,
    DeribitOption2ChartComponent,
    DeribitOption3ChartComponent,
    SettingsComponent,
    AdminPanelComponent,
    AdminUsersComponent,
    AdminUsersDeleteDialog,
    AdminUsersEditDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PlotlyModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [
    Title,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    // MatNativeDateModule,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    // MatMomentDateModule,
    MatDatepickerModule,

    GlobalVariableService,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    AdminUsersDeleteDialog,
    AdminUsersEditDialog,
  ],
})
export class AppModule {
}
