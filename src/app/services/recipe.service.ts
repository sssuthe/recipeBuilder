import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti', 
      'A test', 
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
      [
        new Ingredient('Pasta', 1),
        new Ingredient('Jar of sauce', 1)
      ]),
    new Recipe(
      'Tacos', 
      'A different test', 
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
      [
        new Ingredient('Shells', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomatoes', 3)
      ]),
    new Recipe(
      'Steak', 
      'A  new test', 
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
      [
        new Ingredient('Steak',1)
      ])
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();//by returning what's returned from slice we get a copy of the collection and not a direct reference
  }
}
