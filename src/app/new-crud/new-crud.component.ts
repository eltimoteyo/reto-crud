import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IAlumno } from '../commons/interfaces/user-crud.interface';
import { AlumnoCrudService } from '../commons/services/alumno-crud.service';
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
  alumnoUpdate: any;
  alumno!: IAlumno;
  constructor(
    public newCrudPresenter: NewCrudPresenter,
    private router: Router,
    private alumnoCrudService: AlumnoCrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.alumnoUpdate = params;
      if (this.alumnoUpdate.id) {
        this.cargarUserUpdate();
      }
    });
  }

  cargarUserUpdate() {
    if (this.alumnoUpdate) {
      this.alumnoCrudService
        .findAlumno(this.alumnoUpdate.id)
        .subscribe((alumno: IAlumno) => {
          this.alumno = alumno;
          this.newCrudPresenter.setValues(this.alumno);
          console.log('getuser', this.alumno);
        });
    }
  }

  save() {
    const resquest: IAlumno = {
      alumnoId: this.alumnoUpdate.id ? this.alumnoUpdate.id : this.makeid(12),
      nombre: this.newCrudPresenter.form.controls.nombre.value,
      apellidos: this.newCrudPresenter.form.controls.apellidos.value,
      fechaNacimiento:
        this.newCrudPresenter.form.controls.fechaNacimiento.value,
      sexo: this.newCrudPresenter.form.controls.sexo.value,
    };
    console.log(this.newCrudPresenter.form.value); ///sendUser
    if (this.alumnoUpdate.id) {
      this.alumnoCrudService.updateAlumno(resquest).subscribe((resp) => {
        console.log(resp);
      });
    } else {
      this.alumnoCrudService.createAlumno(resquest).subscribe((resp) => {
        console.log(resp);
        this.router.navigateByUrl('/listar-registros');
      });
    }
  }

  makeid(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
