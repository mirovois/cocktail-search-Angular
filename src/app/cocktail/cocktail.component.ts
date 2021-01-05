import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../Cocktail';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail:Cocktail;
  @Output() clickCocktail: EventEmitter<String> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
  emitToParent(){
    this.clickCocktail.emit(this.cocktail.strDrink);
  }

}
