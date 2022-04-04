import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puck-details',
  templateUrl: './puck-details.component.html',
  styleUrls: ['./puck-details.component.scss']
})
export class PuckDetailsComponent  {
  products: any[] = [{name : 'Big Query1'} , {name : 'Big Query2'} , {name : 'Big Query3'} , {name : 'Big Query'} , { name: 'datasets'},{name : 'Big Query6'} ,{name : 'Big Query7'},{name : 'Big Query8'} ,{name : 'Big Query9'},];

  images!: any[];

  galleriaResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];


}
