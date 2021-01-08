import { CocktailService } from './../cocktail.service';
import { Cocktail } from './../Cocktail';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-cocktail',
  templateUrl: './single-cocktail.component.html',
  styleUrls: ['./single-cocktail.component.scss']
})
export class SingleCocktailComponent implements OnInit {
  cocktail: Cocktail;
  constructor(private cocktailService:CocktailService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      this.cocktailService.getCocktail(+params.get('id')).subscribe((value:Cocktail) =>{
        this.cocktail = value;
      })
    })
  }

}
