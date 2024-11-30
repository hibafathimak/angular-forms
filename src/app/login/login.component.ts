import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:FormGroup
loginStatus:boolean=true

constructor(private fb:FormBuilder){
  this.loginForm=this.fb.group({
    username:["",[Validators.pattern("touchWorld"),Validators.required]],
    password:["",[Validators.pattern("touchWorldTech"),Validators.required]]
  })
}

login(){
  if(this.loginForm.valid){
    alert("login successfull")
    this.loginStatus=false
  }else{
    alert("invalid form")
  }
}
}
