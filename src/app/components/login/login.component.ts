import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email= '';
  password= '';
  
  
 
  //inyectamos en el constructor el FormBuilder
  constructor() {
    //Crear el grupo de controles para el formulario de Login
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}