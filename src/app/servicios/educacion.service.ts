import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
<<<<<<< HEAD
  eduURL = 'https://franhasenauer.onrender.com/edu/'
=======
  eduURL='https://franhasenauer.onrender.com/edu/';
>>>>>>> a345c1e632e0ad9fe78658ada5953c9dd4d02748
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }
  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }
  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'create', educacion);
  }
  public update(id: number, educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, educacion);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
