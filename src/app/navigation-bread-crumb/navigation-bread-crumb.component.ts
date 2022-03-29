import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-bread-crumb',
  templateUrl: './navigation-bread-crumb.component.html',
  styleUrls: ['./navigation-bread-crumb.component.scss']
})
export class NavigationBreadCrumbComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {label:'Vandelay 3'},
      {label:'Data Pucks'},

    ];
  }

}
