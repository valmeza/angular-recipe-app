import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'My recipe',
      'A very good recipe',
      'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612'
    ),
    new Recipe(
      'Another recipe',
      'My mothers recipe',
      'https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612'
    ),
  ];

  constructor() {}

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
