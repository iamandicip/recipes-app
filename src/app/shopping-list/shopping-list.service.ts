import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('Tomatoes', 5)
    ];

    addIngredient(newIngredient: Ingredient) {
        if (newIngredient) {
            this.ingredients.push(newIngredient);
            this.ingredientsChanged.next(this.getIngredients());
        }
    }

    addIngredients(ingredients: Ingredient[]) {
        // spread operator from ES6: it transforms the array into separate elements
        // and push supports multiple arguments
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.getIngredients());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}
