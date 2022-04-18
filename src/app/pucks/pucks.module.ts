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
import { PuckDetailsComponent } from './puck-details/puck-details.component';
import {ToolbarModule} from "primeng/toolbar";
import { CarouselModule } from 'primeng/carousel';
import {DatasetsComponent} from "./datasets/datasets.component";
import {CreateDatasetComponent} from "./create-dataset/create-dataset.component";
import {InputMaskModule} from 'primeng/inputmask';

const routes: Routes = [
  {path: '', component: CreateDatasetComponent,
    children: [
      {path: '', component: CreateDatasetComponent},
      {path: 'puck-detail', component: PuckDetailsComponent},
      {path: 'puck-detail/datasets', component: DatasetsComponent},
      {path: 'puck-detail/datasets/create-dataset', component: CreateDatasetComponent}


    ]},
];


@NgModule({
  declarations: [
    ViewPucksComponent,
    PucksComponent,
    PuckDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    TableModule,
    FieldsetModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  providers:[MessageService, ConfirmationService]
})
export class PucksModule { }
