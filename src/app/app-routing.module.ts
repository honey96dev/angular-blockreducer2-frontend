import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "@app/_helpers";
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {HomeModule} from "@app/home/home.module";
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PriceChartComponent} from './home/general/price-chart/price-chart.component';
import {VolumeChartComponent} from './home/general/volume-chart/volume-chart.component';

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
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      {path: 'general/price-chart', component: PriceChartComponent, pathMatch: 'full'},
      {path: 'general/volume-chart', component: VolumeChartComponent, pathMatch: 'full'},
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
