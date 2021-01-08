import { CocktailService } from './../cocktail.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cocktail } from '../Cocktail';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.component.html',
  styleUrls: ['./add-cocktail.component.scss']
})
export class AddCocktailComponent implements OnInit {
  cocktailForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
              private cocktailService:CocktailService) {
    this.cocktailForm = this.formBuilder.group({
      Name: [''],
      Description: [''],
      ImageURL: ['']
    })

    // this.cocktailForm = new FormGroup({
    //   Name: new FormControl(),
    //   Description: new FormControl(),
    //   ImageURL: new FormControl()
    // })
  }

  ngOnInit(): void {
  }
  add(){
    const singleCocktail:Cocktail = {
      strDrink: this.cocktailForm.controls.Name.value,
      // strGlass:this.cocktailForm.controls.Galss.value
      strInstructions: this.cocktailForm.controls.Description.value,
      strDrinkThumb: this.cocktailForm.controls.ImageURL.value,
    };
    // this.cocktailService.addCocktail(singleCocktail)
    this.router.navigate(['/home'])
  }

}
