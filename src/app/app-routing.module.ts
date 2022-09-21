import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia/edit-experiencia.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'skills', component:SkillsComponent},
{ path: 'proyectos', component:ProyectosComponent},
{ path: 'info', component:MiInformacionComponent },
{ path: 'expe', component:ExperienciaLaboralComponent },
{ path: 'newexpe', component:NewExperienciaComponent },
{ path: 'editexpe/:id', component:EditExperienciaComponent },







{path: '', redirectTo: '', pathMatch: 'full'},
{ path: '**', component:ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
