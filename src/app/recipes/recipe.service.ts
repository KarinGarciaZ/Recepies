import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  constructor(private shoppinglistService: ShoppingListService) {

  }

  recipeSelected = new Subject<Recipe>();

  recipes: Recipe[] = [
    new Recipe( 
      'tacos', 
      'tacos de canasta', 
      'https://cocina-casera.com/mx/wp-content/uploads/2018/05/tacos-de-canasta-700x400.jpg',
      [new Ingredient( 'carne', 10 )]
    ),
    new Recipe( 
      'Anvorgueza', 
      'anvorgueza hawaiana', 
      'https://www.elgrafico.mx/sites/default/files/styles/f5-689x388/public/2019/05/28/dia_de_la_hamburgesa_anvorgesa_origen_memes.jpg?itok=tl5gZg0u',
      [new Ingredient( 'carne', 10 )]
    )
  ]

  getRecipes() :Recipe[]{
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) :void{
    this.shoppinglistService.addIngredients(ingredients)
  }

  getRecipe( index: number ) :Recipe{
    return this.recipes[index]
  }
}