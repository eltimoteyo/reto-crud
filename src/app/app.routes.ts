import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ListCrudComponent } from './list-crud/list-crud.component';
import { NewCrudComponent } from './new-crud/new-crud.component';

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
    path: '**',
    component: DefaultComponent,
  },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
