import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IAlumno } from '../commons/interfaces/user-crud.interface';
import { AlumnoCrudService } from '../commons/services/alumno-crud.service';
import { AddNotasComponent } from './add-notas/add-notas.component';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {
  alumnos: IAlumno[] = [];
  @Output() alumnoSelect = new EventEmitter<IAlumno>();

  constructor(
    private router: Router,
    private alumnoCrudService: AlumnoCrudService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getListCrud();
  }

  getListCrud() {
    this.alumnoCrudService.getList().subscribe((rest: IAlumno[]) => {
      this.alumnos = rest;
      console.log(this.alumnos);
    });
  }
  counterPages(i: number) {
    console.log(i);
    let miarray = new Array(i);
    console.log(miarray);
    return miarray;
  }
  edit(alumno: IAlumno) {
    console.log(alumno);
    const url = '/nuevo-regostro?id=' + alumno.alumnoId;
    this.router.navigateByUrl(url);
  }

  delete(id: string) {
    this.alumnoCrudService.deleteAlumno(id).subscribe((rest) => {
      alert('se elimino el registro: ' + rest);
      this.getListCrud();
    });
  }

  addNotas(alumno: IAlumno) {
    const dialogRef = this.dialog.open(AddNotasComponent, {
      width: '720px',
      data: alumno,
    });

    dialogRef.afterClosed().subscribe((result) => {
      //this.animal = result;
      console.log('The dialog was closed', result);
    });
  }
}
