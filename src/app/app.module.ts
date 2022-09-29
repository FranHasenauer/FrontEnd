import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PortfolioService } from './servicios/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { MiInformacionComponent } from './components/mi-informacion/mi-informacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorPersonalizadoComponent } from './components/error-personalizado/error-personalizado.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AuthService } from './servicios/auth.service';
import { PersonaService } from './servicios/persona.service';
import { interceptorProvider } from './servicios/interceptor-service';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto/edit-proyecto.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    FooterComponent,
    ErrorPersonalizadoComponent,
    MiInformacionComponent,
    ProyectosComponent,
    SkillsComponent,
    LoginComponent,
    RegisterComponent,
    ExperienciaLaboralComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    
    
   
  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule,
    
    
   
   
   
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
    }),
    
    
   
    
    
  ],
  providers: [PortfolioService,FormsModule,AuthService,PersonaService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
