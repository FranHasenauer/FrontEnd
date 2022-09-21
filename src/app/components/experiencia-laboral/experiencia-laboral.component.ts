import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss']
})
export class ExperienciaLaboralComponent implements OnInit {
  exp: Experiencia[] = [];
  constructor(private experienciaS: ExperienciaService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaS.lista().subscribe(data => { this.exp = data })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.experienciaS.delete(id).subscribe(data => { this.cargarExperiencia() })
    }
  }


}
