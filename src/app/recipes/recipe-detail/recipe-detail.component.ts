import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeItem: Recipe;
  id: number;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router){

  }

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeItem = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});// We're already in a location that has most of the path we need, just need to add edit
  }
}
