import { Component, OnInit } from '@angular/core';
import { IRetoCrudResponse } from '../commons/interfaces/reto-crud.interface';
import { IUser } from '../commons/interfaces/user.interface';
import { RetoCrudService } from '../commons/services/reto-crud.service';

@Component({
  selector: 'app-lista-paginada',
  templateUrl: './lista-paginada.component.html',
  styleUrls: ['./lista-paginada.component.scss'],
})
export class ListaPaginadaComponent implements OnInit {
  users: IUser[] = [];
  crudResponse!: IRetoCrudResponse;

  constructor(private retoCrudService: RetoCrudService) {}

  ngOnInit(): void {
    this.getListCrud(1);
  }

  getListCrud(page: number) {
    this.retoCrudService
      .getListPaginado(page)
      .subscribe((rest: IRetoCrudResponse) => {
        this.crudResponse = rest;
        this.users = rest.data;
        console.log(this.users);
      });
  }
  counterPages(i: number) {
    console.log(i);
    let miarray = new Array(i);
    console.log(miarray);
    return miarray;
  }
}
