import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "@app/_helpers";
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PriceChartComponent} from './home/general/price-chart/price-chart.component';
import {VolumeChartComponent} from './home/general/volume-chart/volume-chart.component';
import {OhlcChartComponent} from "@app/home/general/ohlc-chart/ohlc-chart.component";
import {MarketLinearChartComponent} from "@app/home/market-sentiment/linear/market-linear-chart.component";
import {MarketLogarithmicChartComponent} from "@app/home/market-sentiment/logarithmic/market-logarithmic-chart.component";
import {ExchangeInfoComponent} from "@app/home/exchange-info/exchange-info.component";
import {VolatilityChartComponent} from "@app/home/volatility/chart/volatility-chart.component";
import {DeribitOption1ChartComponent} from "@app/home/deribit/option1-chart/deribit-option1-chart.component";
import {DeribitOption2ChartComponent} from "@app/home/deribit/option2-chart/deribit-option2-chart.component";
import {DeribitOption3ChartComponent} from "@app/home/deribit/option3-chart/deribit-option3-chart.component";
import {VwapChartComponent} from "@app/home/general/vwap-chart/vwap-chart.component";
import {SettingsComponent} from "@app/home/settings/settings.component";
import {AdminPanelComponent} from "@app/home/admin/panel/admin-panel.component";
import {AdminUsersComponent} from "@app/home/admin/users/admin-users.component";
import {AdminGuard} from "@app/_helpers/admin.guard";
import {VolatilityRecalculateComponent} from "@app/home/volatility/recalculate/recalculate.component";
import {FootprintChartComponent} from "@app/home/footprint-chart/footprint-chart.component";
import {TradingviewComponent} from "@app/home/general/tradingview/tradingview.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {path: '', component: SigninComponent, pathMatch: 'full'},
      {path: 'sign-in', component: SigninComponent, pathMatch: 'full'},
      {path: 'sign-up', component: SignupComponent, pathMatch: 'full'},
    ],
  },
  {
    path: 'app',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    // loadChildren: '@app/home/home.module#HomeModule',
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [AuthGuard, AdminGuard],
        children: [
          {path: 'users', component: AdminUsersComponent, pathMatch: 'full'},
        ],
      },
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      {path: 'general/price-chart', component: PriceChartComponent, pathMatch: 'full'},
      {path: 'general/tradingview', component: TradingviewComponent, pathMatch: 'full'},
      {path: 'general/volume-chart', component: VolumeChartComponent, pathMatch: 'full'},
      {path: 'general/vwap-chart', component: VwapChartComponent, pathMatch: 'full'},
      {path: 'general/ohlc-chart', component: OhlcChartComponent, pathMatch: 'full'},
      {path: 'volatility/chart', component: VolatilityChartComponent, pathMatch: 'full'},
      {path: 'volatility/recalculate', component: VolatilityRecalculateComponent, pathMatch: 'full'},
      {path: 'market-sentiment/linear', component: MarketLinearChartComponent, pathMatch: 'full'},
      {path: 'market-sentiment/logarithmic', component: MarketLogarithmicChartComponent, pathMatch: 'full'},
      {path: 'exchange-info', component: ExchangeInfoComponent, pathMatch: 'full'},
      {path: 'deribit/option1', component: DeribitOption1ChartComponent, pathMatch: 'full'},
      {path: 'deribit/option2', component: DeribitOption2ChartComponent, pathMatch: 'full'},
      {path: 'deribit/option3', component: DeribitOption3ChartComponent, pathMatch: 'full'},
      {path: 'footprint', component: FootprintChartComponent, pathMatch: 'full'},
      {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
    ],
  },
  {path: '**', redirectTo: 'app'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
