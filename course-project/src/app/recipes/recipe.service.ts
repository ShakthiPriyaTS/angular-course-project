import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe-list/recipe.model';

@Injectable({providedIn: 'root'}) 
export class RecipeService {


    private recipes: Array<Recipe> = [
        new Recipe('Egg Omelet', 
        'Cheesy Juicy Creamy Omelet', 
        'http://beta.lekhafoods.com/media/1522462/egg-vegetable-omelette.jpg',
        [
            new Ingredient('Egg', 2),
            new Ingredient('Onion', 2),
            new Ingredient('Tomato', 1),
            new Ingredient('Cheese', 2)
        ]),
        new Recipe('Sandwich', 
        'Cheesy Garden fresh Sandwich', 
        'http://2.bp.blogspot.com/-VDlK83TTN04/VgEVZa6XZfI/AAAAAAAAH6k/V7jLCOWXaHU/s1600/spicy%2Bvegetable%2Bsandwich.JPG',
        [
            new Ingredient('Tomato', 2),
            new Ingredient('Bread', 4),
            new Ingredient('Onion', 1),
            new Ingredient('Cheese', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    recipeClickEmitter = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }
}