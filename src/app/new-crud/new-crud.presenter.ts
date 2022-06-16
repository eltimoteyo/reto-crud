import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { IUserCrud } from '../commons/interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class NewCrudPresenter {
  //errorsCatalogue = errorsCatalogue;
  id: FormControl = new FormControl(null);
  nombre: FormControl = new FormControl(null);
  apellidos: FormControl = new FormControl(null);
  avatar: FormControl = new FormControl(null);
  email: FormControl = new FormControl(null);
  teleefono: FormControl = new FormControl(null);

  form = this.fb.group({
    id: this.id,
    nombre: this.nombre,
    apellidos: this.apellidos,
    avatar: this.avatar,
    email: this.email,
    teleefono: this.teleefono,
  });
  constructor(private fb: FormBuilder) {
    this.addValidators();
  }

  addValidators() {
    this.nombre.setValidators([Validators.required]);
  }

  setValues(user: IUserCrud) {
    this.id.setValue(user.id);
    this.nombre.setValue(user.nombre);
    this.apellidos.setValue(user.apellidos);
    this.avatar.setValue(user.avatar);
    this.email.setValue(user.email);
    this.teleefono.setValue(user.teleefono);
  }
}
