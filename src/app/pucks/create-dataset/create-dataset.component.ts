import {Component, HostListener, OnInit} from '@angular/core';
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {RsrcTypeElement} from "./rsrcType.interface";
import {DomSanitizer} from "@angular/platform-browser";
import {ConfigService} from "../../config.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-dataset',
  templateUrl: './create-dataset.component.html',
  styleUrls: ['./create-dataset.component.scss']
})
export class CreateDatasetComponent implements OnInit {

  menuMode = 'static';
  val1!: string;

  val2!: string;
  selectedDataSetType: any;
  name: string = '';
  optionalName: string = '';
  datasetSummary: string = '';
  datasetDescription: string = '';
  resourceTypes: any[] = [];
  contentNameLabel: string = '';
  datasetType: any[] = [
    {name: 'L0', code: 'l0'},
    {name: 'L1', code: 'l1'},
    {name: 'L2', code: 'l2'},
  ];
  selectedDatasetHelpText!: string;
  displayElement1: RsrcTypeElement = {} as RsrcTypeElement;
  displayElement2: RsrcTypeElement = {} as RsrcTypeElement;
  displayElement3: RsrcTypeElement = {} as RsrcTypeElement;
  displayElement4: RsrcTypeElement = {} as RsrcTypeElement;
  displayElement5: RsrcTypeElement = {} as RsrcTypeElement;
  displayElement6: RsrcTypeElement = {} as RsrcTypeElement;
  groupLabel!: string;
  groupHelpText!: string;

  ref!: DynamicDialogRef;


  constructor(private santized: DomSanitizer, private puckService: ConfigService ,private router: Router) {
    this.puckService.getResourcTypes().subscribe((val: any) =>{
      this.resourceTypes = val;
      this.groupLabel = this.resourceTypes[0].rsrcTypeGroupNam;
      this.groupHelpText = this.resourceTypes[0].resourceTypeGroupUiText;
    })
  }
  replaceWithUnderScore(ev: any){
  }
  replaceWithUnderScoreContent(ev: any){
  }
  ngOnInit() {
  }
  clearData(){
    this.displayElement1.rsrcTypeValue = '';
    this.displayElement2.rsrcTypeValue = '';
    this.displayElement3.rsrcTypeValue = '';
    this.displayElement4.rsrcTypeValue = '';
    this.displayElement5.rsrcTypeValue = '';
  }

  @HostListener('click', ['$event.target']) onClick(e: any) {
    if(e.id === 'abbreviations'){
//      this.showAbbreviationsList();
    }
  }

  getSelectedDataSetLabel(){
    this.optionalName = '';
    this.name = '';
    this.clearData();
    const display1: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 1 )[0];
    this.displayElement1.label = display1.rsrcValueTypeNam;
    this.displayElement1.uiText = this.santized.bypassSecurityTrustHtml(display1.resourceValueTypeUiText);
    this.selectedDatasetHelpText = display1.resourceTypeUiText;
    this.groupLabel = display1.rsrcTypeGroupNam;
    this.groupHelpText = display1.resourceTypeUiText;

    const display2: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 2 )[0];
    this.displayElement2.label = display2.rsrcValueTypeNam;
    this.displayElement2.uiText = display2.resourceValueTypeUiText;
    this.groupLabel = display2.rsrcTypeGroupNam;
    this.groupHelpText = display2.resourceTypeUiText;


    const display3: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 3 )[0];
    this.displayElement3.label = display3.rsrcValueTypeNam;
    this.displayElement3.uiText = display3.resourceTypeUiText;

    const display4: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 4 )[0];
    this.displayElement4.label = display4.rsrcValueTypeNam;
    this.displayElement4.uiText = display4.resourceValueTypeUiText;
    this.groupLabel = display4.rsrcTypeGroupNam;
    this.groupHelpText = display4.resourceTypeUiText;

    const display5: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 5 )[0];
    this.displayElement5.label = display5.rsrcValueTypeNam;
    this.displayElement5.uiText = display5.resourceValueTypeUiText;
    this.groupLabel = display5.rsrcTypeGroupNam;
    this.groupHelpText = display5.resourceTypeUiText;

  }
  cancel(){
    //const url = 'pucks/puck-detail/'+  this.puckService.selectedModule?.moduleName?.toLowerCase().replace(' ','-');
    // this.router.navigateByUrl(url)
  }

  createDataset(){
    let requestObject: any = { puckKey: '1',  moduleKey: '1', selecteDataSetType: '', rsrcValues: []  };
    const display1: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 1 )[0];
    const value1: any = {
      rsrcTypeKey: display1.rsrcTypeKey, rsrcTypeNam:  display1.rsrcTypeNam, rsrcValueTypeKey: display1.rsrcValueTypeKey, rsrcVrsnId:  display1.rsrcVrsnId, displayOrder: display1.displayOrder,
      rsrcTypeValue: this.displayElement1.rsrcTypeValue
    } as any;

    const display2: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 2 )[0];
    const value2: any = {
      rsrcTypeKey: display2.rsrcTypeKey, rsrcTypeNam:  display2.rsrcTypeNam, rsrcValueTypeKey: display2.rsrcValueTypeKey, rsrcVrsnId:  display2.rsrcVrsnId, displayOrder: display2.displayOrder,
      rsrcTypeValue: this.displayElement2.rsrcTypeValue
    } as any;

    const display3: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 4 )[0];
    const value3: any = {
      rsrcTypeKey: display3.rsrcTypeKey, rsrcTypeNam:  display3.rsrcTypeNam, rsrcValueTypeKey: display3.rsrcValueTypeKey, rsrcVrsnId:  display3.rsrcVrsnId, displayOrder: display3.displayOrder,
      rsrcTypeValue: this.displayElement4.rsrcTypeValue
    } as any;

    const display4: any = this.resourceTypes.filter(val => val.rsrcTypeNam ===  this.selectedDataSetType?.name && val.displayOrder === 5 )[0];
    const value4: any = {
      rsrcTypeKey: display4.rsrcTypeKey, rsrcTypeNam:  display4.rsrcTypeNam, rsrcValueTypeKey: display4.rsrcValueTypeKey, rsrcVrsnId:  display4.rsrcVrsnId, displayOrder: display3.displayOrder,
      rsrcTypeValue: this.displayElement5.rsrcTypeValue
    } as any;

    requestObject.rsrcValues.push(value1);
    if(this.optionalName)
      requestObject.rsrcValues.push(value2);
    requestObject.rsrcValues.push(value3);
    requestObject.rsrcValues.push(value4);
    // this.puckService.saveDataset(requestObject).subscribe(val=>{
    //   console.log(val)
    // })
    console.log(requestObject);
  }}

export let datasetTypes = [];
