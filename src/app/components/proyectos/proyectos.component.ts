import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];

  constructor(private proService: ProyectosService, private tokenService: TokenService) { }
  isLogged = false
  ngOnInit(): void {
    this.cargarPro();
    if (this.tokenService.getToken()) {
      this.isLogged = true; 
    }else {
      this.isLogged = false;
    }
  }

  cargarPro(): void {
    this.proService.lista().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }
  borrarPro(id:number){
    if(id != undefined){
      this.proService.delete(id).subscribe(
        data=>{
          this.cargarPro();
        }
      )
    }
  }
}