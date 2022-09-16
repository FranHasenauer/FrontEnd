import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginUsuario } from "src/app/model/LoginUsuario";
import { AuthService } from "src/app/servicios/auth.service";
import { TokenService } from "src/app/servicios/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  //inyectamos en el constructor 
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
      this.isLogged = true;
      this.isLoginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities({authorities: data.authorities });
      this.roles = data.authorities;
      this.router.navigate([''])
    })
  }
}