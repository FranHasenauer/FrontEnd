import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.scss']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;
  constructor(private eduService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }
onCreate():void{
  const educacion = new Educacion(this.nombreE, this.descripcionE);
  this.eduService.save(educacion).subscribe(
    data=>{
      alert("Educacion añadida");
      this.router.navigate(['']);
    }
  )
}
}
