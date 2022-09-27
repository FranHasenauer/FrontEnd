import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  edu: Educacion[] = [];
  constructor(private eduService: EducacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarEdu();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarEdu(): void {
    this.eduService.lista().subscribe(
      data => {
        this.edu = data;
      }
    )
  }
  borrarEdu(id: number) {
    if (id != undefined) {
      this.eduService.delete(id).subscribe(
        data => {
          this.cargarEdu();
        }
      )
    }
  }
}
