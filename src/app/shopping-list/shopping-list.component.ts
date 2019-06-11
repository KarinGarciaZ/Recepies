import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor( private ingredientService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients()

    this.ingredientService.ingredientsChanged
      .subscribe( ( newArray: Ingredient[] ) => {
        this.ingredients = newArray
      })
  }
}
