import { Recipe } from './recipe.model';

export class RecipeService {
  recipes: Recipe[] = [
    new Recipe( 'tacos', 'tacos de canasta', 'https://cocina-casera.com/mx/wp-content/uploads/2018/05/tacos-de-canasta-700x400.jpg' ),
    new Recipe( 'Anvorgueza', 'anvorgueza hawaiana', 'https://www.elgrafico.mx/sites/default/files/styles/f5-689x388/public/2019/05/28/dia_de_la_hamburgesa_anvorgesa_origen_memes.jpg?itok=tl5gZg0u' )
  ]

  getRecipes() {
    return [...this.recipes];
  }
}