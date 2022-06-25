import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurso } from '../interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class CursoCrudService {
  constructor(public http: HttpClient) {}

  getList(): Observable<ICurso[]> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    const url = `${environment.urlReto}/Cursoes`;
    return this.http.get<ICurso[]>(url, { headers: headers });
  }

  createCurso(request: ICurso): Observable<ICurso> {
    const url = `${environment.urlReto}/Cursoes`;
    return this.http.post<ICurso>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateCurso(request: ICurso): Observable<ICurso> {
    const url = `${environment.urlReto}/Cursoes/${request.cursoId}`;
    return this.http.put<ICurso>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  deleteCurso(id: string): Observable<ICurso> {
    const url = `${environment.urlReto}/Cursoes/${id}`;
    return this.http.delete<ICurso>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  findCurso(id: string): Observable<ICurso> {
    const url = `${environment.urlReto}/Cursoes/${id}`;
    return this.http.get<ICurso>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
