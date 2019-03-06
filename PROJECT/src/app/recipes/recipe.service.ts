import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe('A test Recipe', 'This is a test', 'https://farm9.staticflickr.com/8585/28906445485_ce32150295_b.jpg'),
      new Recipe('Another test Recipe', 'This is a test', 'https://farm9.staticflickr.com/8585/28906445485_ce32150295_b.jpg')
    ];

  getRecipes() {
    // this will return a new array
    return this.recipes.slice();
  }
}