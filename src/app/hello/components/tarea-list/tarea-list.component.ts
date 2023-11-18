import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrl: './tarea-list.component.css'
})
export class TareaListComponent {
  tareas: Tarea[] = [];

  onSubmit(formValue: Tarea) {
    this.tareas.push(formValue);
    console.log(this.tareas);
  }
    onRemove(indice: number) {
      this.tareas.splice(indice,1)
    }
}
