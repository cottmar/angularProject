import { EventEmitter, Injectable } from '@angular/core';
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

  addIngredients(ingredients: Ingredient[]) {
    // using spread operator, spread our ingredients into a list of single ingredients which are now pushed without issues to our ingredients array.
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
}
}