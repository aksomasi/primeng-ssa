import { Component } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ReplaceUnderscorePipe} from "./replace-underscore.pipe";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConfigService} from "./config.service";
import {LowerCasePipe} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuMode = 'static';
  val1!: string;

  val2!: string;
  selectedDataSetType: any;
  sourceName!: string;
  contentName!: string;
  datasetSummary!: string;
  datasetDescription!: string;
  datasetTypes = [
    {name: 'L0', code: 'l0'},
    {name: 'L1', code: 'l1'},
    {name: 'L2', code: 'l2'},
  ];
  dataSetForm!: any;
  submitted = false;

  dataTable: any = {
    "headers": [
      "Dataset Type",
      "Dataset Name",
      "Job Status",
      "Job last Updated",
      "Job Requester"
    ],
    "values": {
      "values1": [
        "LO",
        "Dataset Name10",
        "Submmited",
        "2022-05-17",
        "OOPS"
      ],
      "values2": [
        "L1",
        "Dataset Name20",
        "Submmited",
        "2022-05-17",
        "OOPS"
      ],
    }
  }
  test = "abcd ef h <a href='https://www.youtube.com/' target='_blank'> agfghgdh </a>. "
  errorMessage!: any;
  apiResponse!: any;
  // constructor(private orderService: OrdersService) {
  //   orderService
  // }
  get f(): { [key: string]: AbstractControl } {
    return this.dataSetForm.controls;
  }
  col: any [] = [];
  values: any [] = [];
  constructor(private lowerCase: LowerCasePipe ,private formBuilder: FormBuilder, private replaceUnderScore: ReplaceUnderscorePipe, private primengConfig: PrimeNGConfig, private config: ConfigService) {
    this.dataTable.headers.forEach((val: any)=>{
      const headerValue = val.split(" ");
      let field = this.lowerCase.transform(headerValue[0])
      for(let i = 1; i<headerValue.length; i++){
        field = field + headerValue[i];
     }
      this.col.push({field: field, header: val })
    });
    // @ts-ignore
    Object.entries(this.dataTable.values).forEach((data: any) =>{
      let row: any  = {};
      data[1].forEach((value:any, index: number ) =>{
        row[this.col[index].field] = value ;
      })
      this.values.push(row);
    })

    console.log(this.col)
    console.log(this.values)

    config.getOrders().subscribe((value: any) => {
      this.apiResponse = value.data;
    console.log(value)
      },
      error => {
        this.errorMessage = error?.message
      })
    this.dataSetForm = this.formBuilder.group(
      {
        datasetType: ['', Validators.required],
      });
  }
  replaceWithUnderScore(ev: any){
  this.sourceName = this.replaceUnderScore.transform(ev);
  }
  replaceWithUnderScoreContent(ev: any){
    this.contentName = this.replaceUnderScore.transform(ev);
  }
changeValue(event: any){
  const el = event.target || event
  if(el.type == "number" && el.max && el.min ){
    let value = parseInt(el.value)
    el.value = value // for 000 like input cleanup to 0
    let max = parseInt(el.max)
    let min = parseInt(el.min)
    if ( value > max ) el.value = el.max
    if ( value < min ) el.value = el.min
  }
}
  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
  }
  getNameLabel(){
    // @ts-ignore
    return dataSetNames[this.selectedDataSetType.code]
  }
  create(){
    alert(this.dataSetForm.value)
  }
}
export const dataSetNames = {
  l0 : 'Source Name',
  l1 : 'Data Domain Name',
  l2 : 'Entity Name'
}
export const dataSetApiKeyNames = {
  l0_name : 'sourceName',
  l1_name : 'dataDomainName',
  l2_name : 'entityName'
}
