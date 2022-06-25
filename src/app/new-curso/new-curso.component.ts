import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ICurso } from '../commons/interfaces/user-crud.interface';
import { CursoCrudService } from '../commons/services/curso-crud.service';
import { NewCursoPresenter } from './new-curso.presenter';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.scss'],
  providers: [NewCursoPresenter],
})
export class NewCursoComponent implements OnInit {
  cursoUpdate: any;
  curso!: ICurso;
  constructor(
    public newCursoPresenter: NewCursoPresenter,
    private router: Router,
    private cursoCrudService: CursoCrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.cursoUpdate = params;
      if (this.cursoUpdate.id) {
        this.cargarUserUpdate();
      }
    });
  }

  cargarUserUpdate() {
    if (this.cursoUpdate) {
      this.cursoCrudService
        .findCurso(this.cursoUpdate.id)
        .subscribe((curso: ICurso) => {
          this.curso = curso;
          this.newCursoPresenter.setValues(this.curso);
          console.log('getuser', this.curso);
        });
    }
  }

  save() {
    const resquest: ICurso = {
      cursoId: this.cursoUpdate.id ? this.cursoUpdate.id : this.makeid(12),
      nombre: this.newCursoPresenter.form.controls.nombre.value,
      descripcion: this.newCursoPresenter.form.controls.descripcion.value,
      obligatorio: this.newCursoPresenter.form.controls.obligatorio.value,
    };
    console.log(this.newCursoPresenter.form.value); ///sendUser
    if (this.cursoUpdate.id) {
      this.cursoCrudService.updateCurso(resquest).subscribe((resp) => {
        this.router.navigateByUrl('/listar-registros');
      });
    } else {
      this.cursoCrudService.createCurso(resquest).subscribe((resp) => {
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
