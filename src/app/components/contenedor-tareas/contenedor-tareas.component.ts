import { Component } from '@angular/core';
import { TareaComponent } from '../tarea/tarea.component';
@Component({
  selector: 'app-contenedor-tareas',
  standalone: true,
  imports: [TareaComponent],
  templateUrl: './contenedor-tareas.component.html',
  styleUrl: './contenedor-tareas.component.scss'
})
export class ContenedorTareasComponent {

}
