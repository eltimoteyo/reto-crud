import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { INotas } from 'src/app/commons/interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class AddNotasPresenter {
  //errorsCatalogue = errorsCatalogue;
  notasId: FormControl = new FormControl(null);
  curso: FormControl = new FormControl(null);
  alumno: FormControl = new FormControl(null);
  prtacticas: FormControl = new FormControl(null);
  parcial: FormControl = new FormControl(null);
  final: FormControl = new FormControl(null);
  promedio: FormControl = new FormControl(null);

  form = this.fb.group({
    notasId: this.notasId,
    curso: this.curso,
    alumno: this.alumno,
    prtacticas: this.prtacticas,
    parcial: this.parcial,
    final: this.final,
    promedio: this.promedio,
  });
  constructor(private fb: FormBuilder) {
    this.addValidators();
  }

  addValidators() {
    this.curso.setValidators([Validators.required]);
  }

  setValues(nota: INotas) {
    this.notasId.setValue(nota.notasId);
    this.curso.setValue(nota.curso);
    this.alumno.setValue(nota.alumno);
    this.prtacticas.setValue(nota.prtacticas);
    this.parcial.setValue(nota.parcial);
    this.final.setValue(nota.final);
    this.promedio.setValue(nota.promedio);
  }
}
