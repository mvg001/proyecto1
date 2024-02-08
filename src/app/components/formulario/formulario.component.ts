import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../interfaces/tarea';
import { TareasService } from '../../services/tareas.service';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  tarea:Tarea={nombre:"", duracion:0,}
  constructor(private tareasService: TareasService) {}
  addTarea() {
    this.tareasService.addTarea({nombre: this.tarea.nombre, duracion: this.tarea.duracion});
  }
}
