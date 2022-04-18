import { Component } from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {ReplaceUnderscorePipe} from "./replace-underscore.pipe";

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

  constructor(private replaceUnderScore: ReplaceUnderscorePipe, private primengConfig: PrimeNGConfig) { }
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
