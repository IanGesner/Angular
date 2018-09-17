import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    constructor() {}
    
    private recipes: Recipe[] = [
        new Recipe('PB & J',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('PB', 1),
                new Ingredient('Jelly', 1),
                new Ingredient('Bread', 2)
            ]),
        new Recipe('Omelette',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Eggs', 3),
                new Ingredient('Ham', 1)
            ])
    ];

    getRecipes() {
        return this.recipes.slice(); // return copy
    }
}