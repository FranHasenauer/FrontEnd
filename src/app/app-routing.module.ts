import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'skills', component:SkillsComponent},
{ path: 'proyectos', component:ProyectosComponent},
{ path: 'info', component:MiInformacionComponent },
/* { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]}, */






{path: '', redirectTo: '', pathMatch: 'full'},
{ path: '**', component:ErrorPersonalizadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
