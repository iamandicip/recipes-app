import { Recipe } from '../recipe.model';
import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    @Output() recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schintzel - just awesome!',
            'https://thestayathomechef.com/wp-content/uploads/2018/03/German-Schnitzel-3-small.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Frech fries', 2)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say?',
            'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Pickles', 2)
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        // returns a copy of the recipes array
        return this.recipes.slice();
    }

    sendToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
