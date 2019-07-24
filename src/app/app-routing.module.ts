import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from "@app/_helpers";
import {AuthLayoutComponent} from './auth/auth-layout/auth-layout.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {HomeLayoutComponent} from './home/home-layout/home-layout.component';
import {DashboardComponent} from './home/dashboard/dashboard.component';
import {PriceChartComponent} from './home/price-chart/price-chart.component';

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
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
      {path: 'general/price-chart', component: PriceChartComponent, pathMatch: 'full'},
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
