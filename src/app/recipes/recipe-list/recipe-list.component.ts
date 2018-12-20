import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is the first recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'),
    new Recipe('Second Recipe', 'This is the second recipe',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg')
  ];

  @Output() recipeForward = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeReceived(receivedRecipe: Recipe) {
    console.log('sending recipe ' + receivedRecipe.name);
    this.recipeForward.emit(receivedRecipe);
  }

}
