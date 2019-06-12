import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient( 'carne', 10 ),
    new Ingredient( 'queso', 15 )
  ]

  getIngredients() :Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredientNew: Ingredient) :void {
    this.ingredients.push( ingredientNew )
    this.ingredientsChanged.next( [...this.ingredients] )
  }

  addIngredients(newIngridients: Ingredient[]) :void {
    this.ingredients.push(...newIngridients);
    this.ingredientsChanged.next( [...this.ingredients] )
  }
}