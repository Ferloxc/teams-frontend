import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { userCredentials } from 'src/models/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user:string = '';
  pass:string = '';
  newCredentials: userCredentials | undefined;

  constructor(private router: Router){ }

  async login() {
    let respuesta =  await fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },      
      body:JSON.stringify({
        "usuario": this.user,
        "contrasena": this.pass
      })
    });

    let j = await respuesta.json()
    this.newCredentials = j

    if (this.newCredentials?.exito == true){
      
      this.router.navigate([`/chats/${this.newCredentials?.usuario.id}`])
      
    }else{
      alert("Usuario y contraseña no coinciden")
    }



    



  }



}
