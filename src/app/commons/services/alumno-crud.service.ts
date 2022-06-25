import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAlumno } from '../interfaces/user-crud.interface';

@Injectable({
  providedIn: 'root',
})
export class AlumnoCrudService {
  constructor(public http: HttpClient) {}

  getList(): Observable<IAlumno[]> {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    const url = `${environment.urlReto}/alumnos`;
    return this.http.get<IAlumno[]>(url, { headers: headers });
  }

  createAlumno(request: IAlumno): Observable<IAlumno> {
    const url = `${environment.urlReto}/alumnos`;
    return this.http.post<IAlumno>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateAlumno(request: IAlumno): Observable<IAlumno> {
    const url = `${environment.urlReto}/alumnos/${request.alumnoId}`;
    return this.http.put<IAlumno>(url, request).pipe(
      map((response) => {
        return response;
      })
    );
  }

  deleteAlumno(id: string): Observable<IAlumno> {
    const url = `${environment.urlReto}/alumnos/${id}`;
    return this.http.delete<IAlumno>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  findAlumno(id: string): Observable<IAlumno> {
    const url = `${environment.urlReto}/alumnos/${id}`;
    return this.http.get<IAlumno>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
