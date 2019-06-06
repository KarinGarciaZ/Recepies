import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'tacos', 'tacos de canasta', 'https://cocina-casera.com/mx/wp-content/uploads/2018/05/tacos-de-canasta-700x400.jpg' ),
    new Recipe( 'Anvorgueza', 'anvorgueza hawaiana', 'https://www.elgrafico.mx/sites/default/files/styles/f5-689x388/public/2019/05/28/dia_de_la_hamburgesa_anvorgesa_origen_memes.jpg?itok=tl5gZg0u' )
  ]

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  selectItem( i: number ) {
    this.recipeSelected.emit(this.recipes[i])
  }

}
