import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  // could manage our shopping list, list of ingredient. maybe add addIngredient here. it shouldn't live in the componenet anymore.
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 4),
    new Ingredient('Asparagus', 2)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}