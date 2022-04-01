import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './components/app-main/app-main.component';

const routes: Routes = [
  {path : '' , component: AppMainComponent,
    children: [
  {
    path: 'pucks',
    loadChildren: () => import('./pucks/pucks.module').then(m => m.PucksModule)
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
