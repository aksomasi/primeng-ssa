import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SelectButtonModule} from 'primeng/selectbutton';
import {FormsModule} from "@angular/forms";
import { NavigationBreadCrumbComponent } from './navigation-bread-crumb/navigation-bread-crumb.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {FieldsetModule} from 'primeng/fieldset';
import { ContentComponent } from './content/content.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBreadCrumbComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    FormsModule,
    FieldsetModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    BreadcrumbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
