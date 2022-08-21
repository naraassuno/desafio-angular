import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent implements OnInit {
  usuario = '';
  senha = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(){
    this.authService.autenticar(this.usuario,this.senha).subscribe(() => {
      this.router.navigate(['home']);
      //console.log('Autenticado');
      },
      (error) =>{
        alert('usuario ou senha inválido');
        console.log(error);
      }
    );
    /*console.log(this.email)
    console.log(this.senha)*/
  }
}
