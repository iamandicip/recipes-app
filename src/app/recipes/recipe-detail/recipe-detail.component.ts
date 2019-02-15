import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-list/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.recipe = this.recipeService.getRecipe(this.id);

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        console.log('recipe index: ' + this.id);
        console.log('found recipe: ' + this.recipe.name);
      }
    );
  }

  sendToShoppingList() {
    this.recipeService.sendToShoppingList(this.recipe.ingredients);
  }

}
