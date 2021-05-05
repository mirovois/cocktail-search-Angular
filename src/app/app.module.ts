import { LoaderService } from './sevices/loader.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { SingleCocktailComponent } from './single-cocktail/single-cocktail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailComponent,
    CocktailListComponent,
    NotFoundComponent,
    SingleCocktailComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'home',component:CocktailListComponent
    },

    {
      path:'cocktail/:idDrink', component:SingleCocktailComponent
    },
    {
      path:'', redirectTo:'home', pathMatch:'full'
    },
    {
      path:"**", component: NotFoundComponent
    }]),
    BrowserAnimationsModule,

  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
