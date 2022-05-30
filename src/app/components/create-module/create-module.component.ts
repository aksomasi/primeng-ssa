import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../../config.service";
import {RsrcTypeElement} from "../../pucks/create-dataset/rsrcType.interface";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormField} from "../../test-dymanic-forms/form-field";
import {DomSanitizer} from "@angular/platform-browser";
import {FormFieldControlService} from "../../test-dymanic-forms/formfield-control.service";

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  resourceTypes: RsrcTypeElement [];
  selectedResourceTypes: RsrcTypeElement [];
  datasetTypes: string[] = [];
  selectedDataset = '';
  submitted = false;
  formFields: FormField<string>[] = [];
  form: FormGroup;
  groupLabel: string;
  groupHelpText: string;
  constructor(private formFieldService: FormFieldControlService, private santized: DomSanitizer, private puckService: ConfigService,private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({})
  }



  ngOnInit(): void {
    this.puckService.getResourcTypes().subscribe((val : RsrcTypeElement []) =>{
      this.resourceTypes = val.filter(val => val.ruleTypeName === 'Validation');
      this.datasetTypes =  [...new Set(this.resourceTypes.map(val => val.rsrcTypeNam))];
      this.groupLabel = this.resourceTypes[0].rsrcTypeGroupNam;
      this.groupHelpText = this.resourceTypes[0].resourceTypeGroupUiText;
      })
  }
  getSelectedDataSetLabel(){
  this.selectedResourceTypes = this.resourceTypes.filter(val => val.rsrcTypeNam === this.selectedDataset);
    this.groupLabel = this.selectedResourceTypes[0].rsrcTypeGroupNam;
    this.groupHelpText = this.selectedResourceTypes[0].resourceTypeUiText;
    this.loadForm();
  }
  loadForm(){
    this.formFields = [];
    this.selectedResourceTypes.forEach(val=>{
      const newField = new FormField<string>({
        controlType: val.inputValueTypeNam,
        key: val.rsrcValueTypeNam.replace(" ",'').toLowerCase(),
        label: val.rsrcValueTypeNam,
        required: val.rqrdValueFlg,
        order: val.displayOrder,
        ruleType: val.ruleTypeName,
        data: val.data,
        ruleText: val.ruleText,
        ruleErrorMessage: val.errorMessage,
        uiText: this.santized.bypassSecurityTrustHtml(val.resourceValueTypeUiText),
        options: [],
      });
      this.formFields.push(newField)
    });
    this.form = this.formFieldService.toFormGroup(this.formFields);
    let displayOrder1, displayOrder2, displayOrder3;
    this.formFields.forEach(val=>{
      switch (val.order){
        case 1: displayOrder1 = val.key
                break;
        case 2: displayOrder2 = val.key
          break;
        case 3: displayOrder3 = val.key
          break;
      }
    })
    this.form.controls[displayOrder1]?.valueChanges.subscribe(v => {
      const datasetName = this.selectedDataset.toLowerCase() + '_' +
        this.form.controls[displayOrder1].value + this.form.controls[displayOrder2].value
    this.form.controls[displayOrder3]?.setValue(datasetName)
    });
    this.form.controls[displayOrder2]?.valueChanges.subscribe(v => {
      const datasetName = this.selectedDataset.toLowerCase() + '_' +
        this.form.controls[displayOrder1].value + '_' + this.form.controls[displayOrder2].value
      this.form.controls[displayOrder3]?.setValue(datasetName)
    });
  }
  createDataset(){
    console.log(this.form)
    this.selectedResourceTypes.forEach((val: RsrcTypeElement) =>{
    val['value'] = this.form.controls[val.rsrcValueTypeNam.replace(" ",'').toLowerCase()].value
    })
    console.log(this.selectedResourceTypes)
  }
}
