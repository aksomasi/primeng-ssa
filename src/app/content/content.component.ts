import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  pucks = [{
    puckName : 'No PuckName',
    environmentName : 'No Environment',
    ownerName : 'No Owner',
  },
    {
      puckName : '1 No PuckName',
      environmentName : '1 No Environment',
      ownerName : '1 No Owner',
    },
    {
      puckName : 'No PuckName',
      environmentName : 'No Environment',
      ownerName : 'No Owner',
    },
    {
      puckName : '1 No PuckName',
      environmentName : '1 No Environment',
      ownerName : '1 No Owner',
    },
    {
      puckName : 'No PuckName',
      environmentName : 'No Environment',
      ownerName : 'No Owner',
    },
    {
      puckName : '1 No PuckName',
      environmentName : '1 No Environment',
      ownerName : '1 No Owner',
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
