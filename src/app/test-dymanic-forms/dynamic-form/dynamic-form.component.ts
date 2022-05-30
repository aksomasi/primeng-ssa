import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormFieldControlService} from "../formfield-control.service";
import {FormField} from "../form-field";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() formFields: FormField<string>[] = [];
  form: FormGroup;
  payLoad = ' ';
  submit = false;
  constructor(private formfieldService: FormFieldControlService) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
    console.log(this.form)
  }

  onSubmit() {
    this.submit = true;
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  ngOnChanges(changes: any): void {

  }

}
