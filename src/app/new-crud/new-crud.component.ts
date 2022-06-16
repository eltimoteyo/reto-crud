import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  userUpdate: any;
  user!: IUserCrud;
  constructor(
    public newCrudPresenter: NewCrudPresenter,
    private retoCrudService: RetoCrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.userUpdate = params;
      if (this.userUpdate.id) {
        this.cargarUserUpdate();
      }
    });
  }

  cargarUserUpdate() {
    if (this.userUpdate) {
      this.retoCrudService
        .getUser(this.userUpdate.id)
        .subscribe((user: IUserCrud) => {
          this.user = user;
          this.newCrudPresenter.setValues(this.user);
          console.log('getuser', this.user);
        });
    }
  }

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
