import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {  
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    ingredientAdded = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]){
        ingredients.forEach(ingredient => {
            this.ingredients.push(ingredient);
        });
    }

    getIngredients() {
        return this.ingredients.slice(); // return copy
    }

}