import { User } from './user';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = "Cocktail App";
  user: User;

  constructor(private loginService:LoginService) {}

  ngOnInit(){
    this.loginService.getUser().subscribe((user) =>{
      this.user = user;
    });
  }

logName(value:String){
  console.log(value);
}
logout(){
  this.loginService.logout();
}
}
