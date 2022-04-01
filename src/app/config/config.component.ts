import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../app.component";
import { AppMainComponent } from '../components/app-main/app-main.component';
import {ConfigService} from "../config.service";
import {PrimeNGConfig} from "primeng/api";
import {AppConfig} from "../model/app.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {


  scale: number = 14;

  scales: any[] = [12, 13, 14, 15, 16];

  config!: AppConfig;

  subscription!: Subscription;

  constructor(public app: AppComponent, public appMain: AppMainComponent, public configService: ConfigService, public primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.scale = 12;
    this.applyScale();
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;

    });
  }

  onConfigButtonClick(event: { preventDefault: () => void; }) {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configClick = true;
    event.preventDefault();
  }

  incrementScale() {
    this.scale++;
    this.applyScale();
  }

  decrementScale() {
    this.scale--;
    this.applyScale();
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  onRippleChange(ripple: any) {
    this.primengConfig.ripple = ripple;
    this.configService.updateConfig({...this.config, ...{ripple}});
  }

  onInputStyleChange() {
    this.configService.updateConfig(this.config);
  }

  changeTheme(theme:string, dark:boolean){
    let themeElement = document.getElementById('theme-css');
    // @ts-ignore
    themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
    this.configService.updateConfig({...this.config, ...{theme, dark}});
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
