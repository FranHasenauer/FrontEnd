import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditEducacionComponent } from "./components/educacion/edit-educacion/edit-educacion.component";
import { EducacionComponent } from "./components/educacion/educacion.component";
import { NewEducacionComponent } from "./components/educacion/new-educacion/new-educacion.component";
import { ErrorPersonalizadoComponent } from "./components/error-personalizado/error-personalizado.component";
import { EditExperienciaComponent } from "./components/experiencia-laboral/edit-experiencia/edit-experiencia.component";
import { ExperienciaLaboralComponent } from "./components/experiencia-laboral/experiencia-laboral.component";
import { NewExperienciaComponent } from "./components/experiencia-laboral/new-experiencia.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/login/register/register.component";
import { MiInformacionComponent } from "./components/mi-informacion/mi-informacion.component";
import { EditProyectoComponent } from "./components/proyectos/edit-proyecto/edit-proyecto.component";
import { NewProyectoComponent } from "./components/proyectos/new-proyecto/new-proyecto.component";
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { EditSkillsComponent } from "./components/skills/edit-skills/edit-skills.component";
import { NewSkillsComponent } from "./components/skills/new-skills/new-skills.component";
import { SkillsComponent } from "./components/skills/skills.component";




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
{ path: 'newskill', component:NewSkillsComponent },
{ path: 'editskill/:id', component:EditSkillsComponent },





{path: '', redirectTo: '', pathMatch: 'full'},
{ path: '**', component:ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
