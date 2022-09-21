import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.scss']
})
export class NewExperienciaComponent implements OnInit {
    
    nombreEmpresa: string = '';
    fechaIn: string = '';
    fechaOut: string = '';
    puestoEmpresa: string = '';
    domicilioEmpresa: string = '';
    descripcionEmpresa: string = '';
    urlEmpresa: string = '';
  constructor(private experienciaService: ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new Experiencia(this.nombreEmpresa,this.fechaIn,this.fechaOut,this.puestoEmpresa,this.domicilioEmpresa,this.descripcionEmpresa,this.urlEmpresa);
    this.experienciaService.save(exp).subscribe(data =>{alert("experiencia añadida");
  this.router.navigate(['']);
})
  }
}
