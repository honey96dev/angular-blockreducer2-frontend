import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import strings from "@core/strings";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {GeneralChartDataService} from "@app/_services/general-chart-data.service";
import {first} from "rxjs/operators";
import {GlobalVariableService} from "@app/_services/global-variable.service";
import {DashboardService} from "@app/_services/dashboard.service";

let self;
declare const TradingView: any;

@Component({
  selector: 'home-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit {
  strings = strings;

  public constructor(private titleService: Title,
                     private formBuilder: FormBuilder,
                     private globalsService: GlobalVariableService,
                     private dashboardService: DashboardService,
                     private chartDataService: GeneralChartDataService) {
    titleService.setTitle(`${strings.priceChart}-${strings.siteName}`);
    self = this;
  }

  ngOnInit() {
    this.initTradingView();
  }

  initTradingView() {
    new TradingView.widget(
      {
        // autosize: true,
        width: '100%',
        height: 800,
        "symbol": "BITMEX:XBTUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_legend": true,
        "allow_symbol_change": true,
        "container_id": "tradingview_806f8"
      }
    );
  }
}
