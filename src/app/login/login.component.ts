import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router){
    
  }

  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/registrar')
  }
}