import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.username, this.password);
    console.log(`User ${this.username} is logged in`)
    // this.username = '';
    // this.password = '';
  }
  cancel(){
    this.username = '';
    this.password = '';
  }
}
