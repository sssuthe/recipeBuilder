import { Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClicked(){
    this.router.navigate(['new'], {relativeTo: this.route, queryParamsHandling: 'preserve'});// We're already in a location that has most of the path we need, just need to add edit
  }
}
