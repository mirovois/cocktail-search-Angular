import { User } from './user';
import { LoginService } from './login.service';
import { CocktailService } from './cocktail.service';
import { Component, OnInit } from '@angular/core';
import { Cocktail } from './Cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = "Cocktail App";
  cocktails:Cocktail[];
  user: User;

  constructor(private cocktailService:CocktailService,
    private loginService:LoginService) {}

  ngOnInit(){
    this.cocktails = this.cocktailService.getCocktails();
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
