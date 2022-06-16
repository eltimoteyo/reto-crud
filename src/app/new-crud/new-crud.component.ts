import { Component, OnInit } from '@angular/core';
import { IUserCrud } from '../commons/interfaces/user-crud.interface';
import { RetoCrudService } from '../commons/services/reto-crud.service';
import { NewCrudPresenter } from './new-crud.presenter';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-new-crud',
  templateUrl: './new-crud.component.html',
  styleUrls: ['./new-crud.component.scss'],
  providers: [NewCrudPresenter],
})
export class NewCrudComponent implements OnInit {
  constructor(
    public newCrudPresenter: NewCrudPresenter,
    private retoCrudService: RetoCrudService
  ) {}

  ngOnInit(): void {}

  save() {
    const resquest: IUserCrud = {
      nombre: this.newCrudPresenter.form.controls.nombre.value,
      apellidos: this.newCrudPresenter.form.controls.apellidos.value,
      avatar: this.newCrudPresenter.form.controls.avatar.value,
      email: this.newCrudPresenter.form.controls.email.value,
      teleefono: this.newCrudPresenter.form.controls.teleefono.value,
    };
    console.log(this.newCrudPresenter.form.value); ///sendUser
    this.retoCrudService.sendUser(resquest).subscribe((resp) => {
      console.log(resp);
    });
  }
}
