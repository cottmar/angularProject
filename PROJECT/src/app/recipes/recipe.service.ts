import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
      new Recipe(
        'Sushi',
        'Happy Hour sushi is the best sushi', 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382_960_720.jpg',
        [
          new Ingredient('Rice', 6),
          new Ingredient('Tuna', 4)
        ]),
      new Recipe(
       'Chocolate Cherry Cake',
       'Craving it so bad.', 'https://farm6.staticflickr.com/5215/5459511727_ab1cbbf7ba_b.jpg',
      [
        new Ingredient('Chocolate Cake Mix', 1),
        new Ingredient('Cherries', 20)
      ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }
  
    getRecipe(index: number) {
      return this.recipes[index];
    }
  
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.slService.addIngredients(ingredients);
    }
}