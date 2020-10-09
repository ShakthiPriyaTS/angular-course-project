import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Array<Ingredient>>();

  private ingredients: Array<Ingredient> = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  onAddIngredient(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  onAddIngredients(ingredientArray: Array<Ingredient>) {
    this.ingredients.push(...ingredientArray);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}