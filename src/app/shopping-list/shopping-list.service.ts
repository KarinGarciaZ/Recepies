import { Ingredient } from './ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient( 'carne', 10 ),
    new Ingredient( 'queso', 15 )
  ]

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredientNew: Ingredient) {
    this.ingredients.push( ingredientNew )
    this.ingredientsChanged.emit( [...this.ingredients] )
  }

  addIngredients(newIngridients: Ingredient[]) {
    this.ingredients.push(...newIngridients);
    this.ingredientsChanged.emit( [...this.ingredients] )
  }
}