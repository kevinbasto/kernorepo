import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm : FormGroup;
  public uploading : boolean = false;

  constructor(
    private builder: FormBuilder,
    private authService : AuthService
  ){
    this.loginForm = this.builder.group({
      user : ["", [Validators.required, Validators.email]],
      password : ["", [Validators.required]]
    })
  }

  submit(){
    this.uploading = !this.uploading;
    this.authService.logIn(this.loginForm.value)
    .catch(err => {
      console.log("hubo un error al iniciar sesión")
    })
  }
}
