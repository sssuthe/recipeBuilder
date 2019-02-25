import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A different test recipe', 'A different test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A new test recipe', 'A  new test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg')

  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();//by returning what's returned from slice we get a copy of the collection and not a direct reference
  }
}
