import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  datasets = [{
    datasetName : 'No PuckName',
  },
    {
      datasetName : '1 No PuckName',
    },
    {
      datasetName : '2 No PuckName',
    },
    {
      datasetName : '3 No PuckName',

    },
    {
      datasetName : '4 No PuckName',

    },
    {
      datasetName : '5 No PuckName',

    }]
  constructor() { }

  ngOnInit(): void {
  }

}
