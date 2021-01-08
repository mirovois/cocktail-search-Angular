import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { AddCocktailComponent } from './add-cocktail/add-cocktail.component';
import { SingleCocktailComponent } from './single-cocktail/single-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailComponent,
    LoginComponent,
    CocktailListComponent,
    AddCocktailComponent,
    SingleCocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    HttpClient,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:"home",component:CocktailListComponent
    },
    {
      path:"login", component:LoginComponent
    },
    {
      path:"cocktail/add", component:AddCocktailComponent
    },
    {
      path:"cocktail/:id", component:SingleCocktailComponent
    },
    {
      path:'', redirectTo:'home', pathMatch:'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
