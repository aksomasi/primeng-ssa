import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-dataset',
  templateUrl: './create-dataset.component.html',
  styleUrls: ['./create-dataset.component.scss']
})
export class CreateDatasetComponent implements OnInit {
  val1!: string;

  val2!: string;



  constructor() { }

  ngOnInit(): void {
  }

}
