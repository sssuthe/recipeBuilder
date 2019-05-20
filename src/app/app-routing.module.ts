import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes',
     // canActivate: [AuthGuard],
     // canActivateChild: [AuthGuard],
     component: RecipesComponent,
     children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent}, // order matters here, make sure to put this first otherwise we'll be looking for an id of new
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
     ]},
    {path: 'shopping-list',
     // canActivate: [AuthGuard],
     // canActivateChild: [AuthGuard],
     component: ShoppingListComponent,
     children: [
      {path: ':id', component: ShoppingEditComponent},
      {path: ':id/edit', component: ShoppingEditComponent}
    ]},
    // // {path: 'not-found', component: PageNotFoundComponent},
    // {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    // {path: '**', redirectTo: '/not-found'}// don't forget to catch routes that we aren't anticipating and send them to not found
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

  export class AppRoutingModule {}
