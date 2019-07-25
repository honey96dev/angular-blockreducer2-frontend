import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {DashboardComponent} from './dashboard/dashboard.component';

import {PriceChartComponent} from './general/price-chart/price-chart.component';

import {VolumeChartComponent} from './general/volume-chart/volume-chart.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'general/price-chart', component: PriceChartComponent, pathMatch: 'full'},
  {path: 'general/volume-chart', component: VolumeChartComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent, PriceChartComponent, VolumeChartComponent]
})
export class HomeModule {
}
