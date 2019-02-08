import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeItem: {recipe: Recipe};//need @input() here to expose this as a bindable/setable property, recipe-list.component will set this
  
  constructor() { }

  ngOnInit() {
  }

}
