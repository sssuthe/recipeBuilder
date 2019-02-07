import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: {recipe: Recipe};//need @input() here to expose this as a bindable/setable property, recipe-list.component will set this

  constructor() { }

  ngOnInit() {
  }

}
