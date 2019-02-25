import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;//need @input() here to expose this as a bindable/setable property, recipe-list.component will set this

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeItemClicked(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
