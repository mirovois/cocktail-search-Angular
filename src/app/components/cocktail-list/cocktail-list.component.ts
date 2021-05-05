import { Cocktail } from './../../Cocktail';
import { LoaderService } from './../../sevices/loader.service';
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../cocktail.service';
import {NgxPaginationModule} from 'ngx-pagination'

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  cocktailsAlc:Cocktail[];
  cocktailsNonAlc:Cocktail[];

  totalAlc:Number;
  totalNonAlc:Number;
  currentPage1:Number = 1;
  currentPage2:Number = 1;
  constructor(private cocktailService:CocktailService,
              public loaderService:LoaderService
    ) { }

  ngOnInit(){
    // this.cocktails = this.cocktailService.getCocktails();
    // Fetch alcoholic cocktails
    this.loaderService.showLoader()
    this.cocktailService.getCocktailsAlc().subscribe((value:any) =>{
      console.log(`${value.drinks.length} cocktails are in Coctail List component:${value.drinks}`)
      this.cocktailsAlc = value.drinks;
      this.loaderService.hideLoader()
      this.totalAlc = this.cocktailsAlc.length
    })
    // Fetch non-alcoholic cocktails
    this.cocktailService.getCocktailsNonAlc().subscribe((value:any) =>{
      console.log("Coctail List component:",value)
      this.cocktailsNonAlc = value.drinks;
      this.loaderService.hideLoader()
      this.totalNonAlc = this.cocktailsNonAlc.length
    })
  }

}
