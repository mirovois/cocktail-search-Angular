import { Cocktail } from './Cocktail';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails:Cocktail[] = [
    {strDrink: "Margarita",
      strGlass: "Cocktail glass",
      strInstructions:"Rub the rim of the glass with the lime slice",
      strDrinkThumb: "https://image.freepik.com/free-photo/side-view-margarita-cocktail-with-slice-lime-glass_141793-3658.jpg"
    },
    {strDrink: "Margarita Dolce",
      strGlass: "Collins glass",
      strInstructions:"Pour all ingredients (except orange slice and cherry) into a collins glass over ice cubes.",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/sot8v41504884783.jpg"
    },
    {strDrink: "Strawberry Daiquiry",
      strGlass: "Cocktails glass",
      strInstructions:"Pour all ingredients into shaker with ice cubes.",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg"
    },
    {strDrink: "Amaretto Liqueur",
      strGlass: "Collins glass",
      strInstructions:"Combine sugar and 3/4 cup water in a small saucepan.",
      strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg"
    },
  ];
  constructor() { }

  getCocktails():Cocktail[]{
    return this.cocktails;
  }
}
