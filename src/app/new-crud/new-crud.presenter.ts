import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IAlumno } from '../commons/interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class NewCrudPresenter {
  //errorsCatalogue = errorsCatalogue;
  alumnoId: FormControl = new FormControl(null);
  nombre: FormControl = new FormControl(null);
  apellidos: FormControl = new FormControl(null);
  fechaNacimiento: FormControl = new FormControl(null);
  sexo: FormControl = new FormControl(null);

  form = this.fb.group({
    alumnoId: this.alumnoId,
    nombre: this.nombre,
    apellidos: this.apellidos,
    fechaNacimiento: this.fechaNacimiento,
    sexo: this.sexo,
  });
  constructor(private fb: FormBuilder) {
    this.addValidators();
  }

  addValidators() {
    this.nombre.setValidators([Validators.required]);
  }

  setValues(alumno: IAlumno) {
    this.alumnoId.setValue(alumno.alumnoId);
    this.nombre.setValue(alumno.nombre);
    this.apellidos.setValue(alumno.apellidos);
    this.fechaNacimiento.setValue(alumno.fechaNacimiento);
    this.sexo.setValue(alumno.sexo);
  }
}
