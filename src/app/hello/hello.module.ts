import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { TareaListComponent } from './components/tarea-list/tarea-list.component';


@NgModule({
  declarations: [
    HomeComponent, TareaListComponent
  ],
  imports: [
    CommonModule,
    HelloRoutingModule,
    FormsModule,

  ]
})
export class HelloModule {}
