import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPucksComponent } from './view-pucks/view-pucks.component';
import {RouterModule, Routes} from "@angular/router";
import { PucksComponent } from './pucks.component';
import {TableModule} from "primeng/table";
import {ConfirmationService, MessageService} from "primeng/api";
import {FieldsetModule} from "primeng/fieldset";
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

const routes: Routes = [
  {path: '', component: PucksComponent,
    children: [
      {path: '', component: ViewPucksComponent}
    ]},
];


@NgModule({
  declarations: [
    ViewPucksComponent,
    PucksComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    FieldsetModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  providers:[MessageService, ConfirmationService]
})
export class PucksModule { }
