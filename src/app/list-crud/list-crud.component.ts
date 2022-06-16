import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IRetoCrudResponse } from '../commons/interfaces/reto-crud.interface';
import { IUserCrud } from '../commons/interfaces/user-crud.interface';
import { IUser } from '../commons/interfaces/user.interface';
import { RetoCrudService } from '../commons/services/reto-crud.service';

@Component({
  selector: 'app-list-crud',
  templateUrl: './list-crud.component.html',
  styleUrls: ['./list-crud.component.scss'],
})
export class ListCrudComponent implements OnInit {
  users: IUserCrud[] = [];
  crudResponse!: IRetoCrudResponse;
  @Output() userSelect = new EventEmitter<IUserCrud>();

  constructor(
    private router: Router,
    private retoCrudService: RetoCrudService
  ) {}

  ngOnInit(): void {
    this.getListCrud();
  }

  getListCrud() {
    this.retoCrudService.getList().subscribe((rest: IUserCrud[]) => {
      this.users = rest;
      console.log(this.users);
    });
  }
  counterPages(i: number) {
    console.log(i);
    let miarray = new Array(i);
    console.log(miarray);
    return miarray;
  }
  edit(user: IUserCrud) {
    console.log(user);
    const url = '/nuevo-regostro?id=' + user.id;
    this.router.navigateByUrl(url);
    // this.router.navigate(['/nuevo-regostro'], {
    //   queryParams: { id: user.id },
    // });
  }

  delete(id: number) {
    this.retoCrudService.deleteUser(id).subscribe((rest) => {
      alert('se elimino el registro: ' + rest);
      this.getListCrud();
    });
  }
}
