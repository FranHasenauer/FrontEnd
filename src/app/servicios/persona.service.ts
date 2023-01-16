import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

<<<<<<< HEAD
  URL = 'https://franhasenauer.onrender.com/personas/';
=======
  URL='https://franhasenauer.onrender.com/personas/';
>>>>>>> a345c1e632e0ad9fe78658ada5953c9dd4d02748

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }
}
