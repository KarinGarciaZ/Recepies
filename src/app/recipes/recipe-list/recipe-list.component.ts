import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'tacos', 'tacos de canasta', 'https://cocina-casera.com/mx/wp-content/uploads/2018/05/tacos-de-canasta-700x400.jpg' ),
    new Recipe( 'tacos', 'tacos de canasta', 'https://cocina-casera.com/mx/wp-content/uploads/2018/05/tacos-de-canasta-700x400.jpg' )
  ]

  constructor() { }

  ngOnInit() {
  }

}
