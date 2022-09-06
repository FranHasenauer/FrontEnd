import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'https://localhost:3000/api';

  token: any;
  uri: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }
  
    
}