import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICurso } from '../commons/interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class NewCursoPresenter {
  //errorsCatalogue = errorsCatalogue;
  cursoId: FormControl = new FormControl('');
  nombre: FormControl = new FormControl('');
  descripcion: FormControl = new FormControl('');
  obligatorio: FormControl = new FormControl(false);

  form = this.fb.group({
    cursoId: this.cursoId,
    nombre: this.nombre,
    descripcion: this.descripcion,
    obligatorio: this.obligatorio,
  });
  constructor(private fb: FormBuilder) {
    this.addValidators();
  }

  addValidators() {
    this.nombre.setValidators([Validators.required]);
  }

  setValues(curso: ICurso) {
    this.cursoId.setValue(curso.cursoId);
    this.nombre.setValue(curso.nombre);
    this.descripcion.setValue(curso.descripcion);
    this.obligatorio.setValue(curso.obligatorio);
  }
}
