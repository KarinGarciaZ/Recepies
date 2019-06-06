import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient( 'carne', 10 ),
    new Ingredient( 'queso', 15 )
  ]

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient( ingredient: Ingredient ) {
    event.preventDefault()
    this.ingredients.push( ingredient )
  }

}
