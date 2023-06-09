import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/08/06/06/46/bread-2589595_1280.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/08/06/06/46/bread-2589595_1280.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}

  onRecipeSlected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
