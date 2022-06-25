import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ListCrudComponent } from './list-crud/list-crud.component';
import { ListaPaginadaComponent } from './lista-paginada/lista-paginada.component';
import { NewCrudComponent } from './new-crud/new-crud.component';
import { NewCursoComponent } from './new-curso/new-curso.component';

const appRoutes: Routes = [
  {
    path: 'nuevo-regostro',
    component: NewCrudComponent,
  },
  {
    path: 'listar-registros',
    component: ListCrudComponent,
  },
  {
    path: 'listar-paginado',
    component: ListaPaginadaComponent,
  },
  {
    path: 'nuevo-curso',
    component: NewCursoComponent,
  },
  {
    path: '**',
    component: DefaultComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
