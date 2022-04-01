import { Component, OnInit } from '@angular/core';
import {AppMainComponent} from "../app-main/app-main.component";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  items!: MenuItem[];
  breadcrumbItems!: MenuItem[];

  constructor(public appMain: AppMainComponent) { }

  ngOnInit(): void {
    this.breadcrumbItems = [];
    this.breadcrumbItems.push({ label: 'Electronics' });
    this.breadcrumbItems.push({ label: 'Computer' });
    this.breadcrumbItems.push({ label: 'Notebook' });
    this.breadcrumbItems.push({ label: 'Accessories' });
    this.breadcrumbItems.push({ label: 'Backpacks' });
    this.breadcrumbItems.push({ label: 'Item' });

  }

}
