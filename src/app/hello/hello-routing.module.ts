import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';

const routes: Routes = [{
  path: "home",
  component: HomeComponent
},
{
  path: "",
  component: TareaListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloRoutingModule { }
