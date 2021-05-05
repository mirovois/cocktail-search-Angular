import { Cocktail } from './../../Cocktail';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  @Input() cocktail:Cocktail;
  @Output() clickCocktail: EventEmitter<Cocktail> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }
}
