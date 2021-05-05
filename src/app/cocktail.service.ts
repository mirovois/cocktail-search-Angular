import { Observable } from 'rxjs';
import { Cocktail } from './Cocktail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor(private http: HttpClient) { }

  cocktails:Cocktail[];
  // cocktails:Cocktail[] = [
  //   {
  //     id:0,
  //     strDrink: "Margarita",
  //     strGlass: "Cocktail glass",
  //     strInstructions:"Rub the rim of the glass with the lime slice",
  //     strDrinkThumb: "https://image.freepik.com/free-photo/side-view-margarita-cocktail-with-slice-lime-glass_141793-3658.jpg"
  //   },
  //   {
  //     id:1,
  //     strDrink: "Margarita Dolce",
  //     strGlass: "Collins glass",
  //     strInstructions:"Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes.",
  //     strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg"
  //   },
  //   {
  //     id:2,
  //     strDrink: "Strawberry Daiquiry",
  //     strGlass: "Cocktails glass",
  //     strInstructions:"Pour all ingredients into shaker with ice cubes.",
  //     strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg"
  //   },
  //   {
  //     id:3,
  //     strDrink: "Amaretto Liqueur",
  //     strGlass: "Collins glass",
  //     strInstructions:"Combine sugar and 3/4 cup water in a small saucepan.",
  //     strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg"
  //   },
  // ];
  // logCocktail(value:string){
  //   console.log(value)
  // }

  // getCocktails():Cocktail[]{
  //   return this.cocktails
  // }

  getCocktailsAlc():Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }
  getCocktailsNonAlc():Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  }

  getCocktailByName(name:string):Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
  }
  // getCocktail(id:number):Cocktail{
  //   return this.cocktails.find(item =>item.id === id);
  // }
  getCocktail(id:number):Observable<Cocktail>{
    return this.http.get<Cocktail>(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  }
  addCocktail(cocktail:Cocktail){
    cocktail.idDrink = this.cocktails.length;
    this.cocktails.push(cocktail);
  }
}
