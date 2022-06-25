import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'reto-caviero-crud';
  constructor(private router: Router) {}
  newItem() {
    console.log('nuevo');
    this.router.navigateByUrl('/nuevo-regostro');
  }
  listItem() {
    console.log('nuevo');
    this.router.navigateByUrl('/listar-registros');
  }
  listarPaginado() {
    this.router.navigateByUrl('/listar-paginado');
  }
  newCurso() {
    this.router.navigateByUrl('/nuevo-curso');
  }
}
