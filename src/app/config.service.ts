import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {AppConfig} from "./model/app.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  hostUrl: string = environment.url;
  receiveUrl: string = 'receiveing'

  config: AppConfig = {
    theme: 'lara-light-indigo',
    dark: false,
    inputStyle: 'outlined',
    ripple: true
  };

  constructor(private http: HttpClient) {
  }

  getOrders(){
    return this.http.get(this.hostUrl + this.receiveUrl);
  }
  private configUpdate = new Subject<AppConfig>();

  configUpdate$ = this.configUpdate.asObservable();

  updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
  }

  getConfig() {
    return this.config;
  }
  getResourcTypes(){
    return this.http.get('assets/data-backup.json');
  }
  getCustomersLarge() {
    return this.http.get<any>('assets/demo/data/customers-large.json')
      .toPromise()
      .then(res => res.data as any[])
      .then(data => data);
  }

}
