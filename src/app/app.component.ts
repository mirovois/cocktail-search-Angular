import { Cocktail } from './Cocktail';
import { CocktailService } from './cocktail.service';
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
  // cocktails:Cocktail[];

  constructor(private loginService:LoginService, private cocktailService:CocktailService) {}

  ngOnInit(){
    // this.cocktails = this.cocktailService.getCocktails();
    this.loginService.getUser().subscribe((user:User) =>{
      this.user = user;
    });
    // this.user = this.loginService.getUser()
  }
logCocktail(cocktail:Cocktail){
  console.log('Logged cocktail:',cocktail)
}

logout(){
  this.loginService.logout();
}
}
