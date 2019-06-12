import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor( private ingredientService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients()

    this.igChangeSub = this.ingredientService.ingredientsChanged
      .subscribe( ( newArray: Ingredient[] ) => {
        this.ingredients = newArray
      })
  }

  OnDestroy() :void{
    this.igChangeSub.unsubscribe();
  }
}
