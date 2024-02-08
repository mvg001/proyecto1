import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
public tareas:Tarea[]=[];
  constructor() {}
  addTarea(t:Tarea) {
    this.tareas.push(t);
  }
}
