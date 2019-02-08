import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemSelected = new EventEmitter<Recipe>();//need to decorate with output so we can expose this event outward
  
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A different test recipe', 'A different test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A new test recipe', 'A  new test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg'),
    new Recipe('A test recipe', 'A test', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1060/https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg')

  ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe.name + " selected");
    this.recipeItemSelected.emit(recipe);
  }
}
