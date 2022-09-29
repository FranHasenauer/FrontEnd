import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  constructor(private skillsService: SkillsService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {

    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsService.lista().subscribe(data => { this.skills = data });
  }

  borrar(id: number): void {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(data => { this.cargarSkills() });
    }
  }
}
