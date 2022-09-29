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
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'skills', component:SkillsComponent},
{ path: 'proyectos', component:ProyectosComponent},
{ path: 'info', component:MiInformacionComponent },
{ path: 'expe', component:ExperienciaLaboralComponent },
{ path: 'newexpe', component:NewExperienciaComponent },
{ path: 'editexpe/:id', component:EditExperienciaComponent },
{ path: 'edu', component:EducacionComponent },
{ path: 'newedu', component:NewEducacionComponent },
{ path: 'editedu/:id', component:EditEducacionComponent },
{ path: 'newpro', component:NewProyectoComponent },
{ path: 'editpro/:id', component:EditProyectoComponent },





{path: '', redirectTo: '', pathMatch: 'full'},
{ path: '**', component:ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
