import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() itemSelector = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect() {
    console.log('emitting from recipe ' + this.recipe.name);
    this.itemSelector.emit();
  }

}
