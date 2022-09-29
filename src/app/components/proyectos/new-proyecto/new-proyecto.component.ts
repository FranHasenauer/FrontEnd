import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.scss']
})
export class NewProyectoComponent implements OnInit {
nombreP:string;
descripcionP:string;
urlP:string;
imgP:string;
  constructor(private proService:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const proyectos = new Proyectos(this.nombreP, this.descripcionP,this.urlP,this.imgP);
  this.proService.save(proyectos).subscribe(data=>{
    alert("proyecto añadido correctamente");
    this.router.navigate(['']);
  })
}
}
