import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INotas } from '../interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class NotasCrudService {
  constructor(public http: HttpClient) {}

  getList(): Observable<INotas[]> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    const url = `${environment.urlReto}/Notas`;
    return this.http.get<INotas[]>(url, { headers: headers });
  }

  createNotas(request: INotas): Observable<INotas> {
    const url = `${environment.urlReto}/Notas`;
    return this.http.post<INotas>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateNotas(request: INotas): Observable<INotas> {
    const url = `${environment.urlReto}/Notas/${request.notasId}`;
    return this.http.put<INotas>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  deleteNotas(id: string): Observable<INotas> {
    const url = `${environment.urlReto}/Notas/${id}`;
    return this.http.delete<INotas>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  findNotas(id: string): Observable<INotas> {
    const url = `${environment.urlReto}/Notas/${id}`;
    return this.http.get<INotas>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
