import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import {
  IAlumno,
  ICurso,
  INotas,
} from 'src/app/commons/interfaces/user-crud.interface';
import { CursoCrudService } from 'src/app/commons/services/curso-crud.service';
import { NotasCrudService } from 'src/app/commons/services/notas-crud.service';
import { AddNotasPresenter } from './add-notas.presenter';

@Component({
  selector: 'app-add-notas',
  templateUrl: './add-notas.component.html',
  styleUrls: ['./add-notas.component.scss'],
})
export class AddNotasComponent implements OnInit {
  //notasUpdate: any;
  //notas!: INotas;
  cursos: ICurso[] = [];
  alumnos: IAlumno[] = [];
  constructor(
    public dialogRef: MatDialogRef<AddNotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IAlumno,
    public addNotasPresenter: AddNotasPresenter,
    private cursoCrudService: CursoCrudService,
    private notasCrudService: NotasCrudService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.alumnos.push(this.data);
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.notasUpdate = params;
    //   if (this.notasUpdate.id) {
    //     this.cargarUserUpdate();
    //   }
    // });
    this.cursoCrudService.getList().subscribe((curso) => {
      this.cursos = curso;
    });
  }

  // cargarUserUpdate() {
  //   if (this.notasUpdate) {
  //     this.notasCrudService
  //       .findNotas(this.notasUpdate.id)
  //       .subscribe((notas: INotas) => {
  //         this.notas = notas;
  //         this.addNotasPresenter.setValues(this.notas);
  //         console.log('getuser', this.notas);
  //       });
  //   }
  // }

  save() {
    const idnotas = this.makeid(15);
    console.log('id notas ', idnotas);

    const resquest: INotas = {
      notasId: idnotas,
      curso: this.addNotasPresenter.form.controls.curso.value,
      alumno: this.addNotasPresenter.form.controls.alumno.value,
      prtacticas: String(this.addNotasPresenter.form.controls.prtacticas.value),
      parcial: String(this.addNotasPresenter.form.controls.parcial.value),
      final: String(this.addNotasPresenter.form.controls.final.value),
      promedio: String(this.addNotasPresenter.form.controls.promedio.value),
    };
    // if (this.notasUpdate.id) {
    //   this.notasCrudService.updateNotas(resquest).subscribe((resp) => {
    //     this.dialogRef.close();
    //   });
    // } else {
    this.notasCrudService.createNotas(resquest).subscribe((resp) => {
      this.dialogRef.close();
    });
    // }
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
  onblur() {
    const promedio =
      this.addNotasPresenter.prtacticas.value +
      this.addNotasPresenter.parcial.value +
      this.addNotasPresenter.final.value;
    this.addNotasPresenter.promedio.setValue(promedio / 3);
  }
}
