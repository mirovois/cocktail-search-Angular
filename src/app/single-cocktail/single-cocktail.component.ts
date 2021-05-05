import { CocktailService } from './../cocktail.service';
import { Cocktail } from './../Cocktail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoaderService } from '../sevices/loader.service';

@Component({
  selector: 'app-single-cocktail',
  templateUrl: './single-cocktail.component.html',
  styleUrls: ['./single-cocktail.component.scss']
})
export class SingleCocktailComponent implements OnInit {
  cocktail: Cocktail;
  name = "Miro"
  constructor(private cocktailService:CocktailService,
    public loaderService:LoaderService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(){
    // this.cocktail = this.cocktailService?.getCocktail(+this.activatedRoute.snapshot.paramMap.get('id'))
    // this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      //   this.cocktail =  this.cocktailService?.getCocktail(+params.get('id'))
      // })
     this.loaderService.showLoader()
      this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
        this.cocktailService?.getCocktail(+params.get('idDrink')).subscribe((res:any) =>{

        this.cocktail = res.drinks[0]
        console.log("Single Coctail component:",res.drinks[0])
        this.loaderService.hideLoader()
      })
    })
  }

}
