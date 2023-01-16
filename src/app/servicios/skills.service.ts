import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
<<<<<<< HEAD
  URL = 'https://franhasenauer.onrender.com/skills/'
=======
  URL='https://franhasenauer.onrender.com/skill/';
>>>>>>> a345c1e632e0ad9fe78658ada5953c9dd4d02748

  constructor(private httpClient:HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.URL + `detail/${id}`);
  }
  public save(skills: Skills): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }
  public update(id: number, skills: Skills): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
