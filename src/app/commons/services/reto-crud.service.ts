import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRetoCrudResponse } from '../interfaces/reto-crud.interface';
import { IUserCrud } from '../interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class RetoCrudService {
  constructor(public http: HttpClient) {}

  getList(): Observable<IUserCrud[]> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    const url = `${environment.urlReto}`;
    return this.http.get<IUserCrud[]>(url, { headers: headers });
  }

  getListPaginado(page: number = 1): Observable<IRetoCrudResponse> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    const url = `${environment.url}?page=${page}`;
    return this.http.get<IRetoCrudResponse>(url, { headers: headers });
  }

  sendUser(request: IUserCrud): Observable<IUserCrud> {
    const url = `${environment.urlReto}`;
    return this.http.post<IUserCrud>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  deleteUser(id: number): Observable<IUserCrud> {
    const url = `${environment.urlReto}/${id}`;
    return this.http.delete<IUserCrud>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  getUser(id: number): Observable<IUserCrud> {
    const url = `${environment.urlReto}/${id}`;
    return this.http.get<IUserCrud>(url).pipe(
      map((response) => {
        // const resp: IUserCrud = {
        //   id_ticket: response.id
        // };
        return response;
      })
    );
  }
}
