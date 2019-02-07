import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentNavSelection: string = 'Recipes';

  onRecipeNavClicked(){
    this.currentNavSelection = 'Recipes';
    console.log(this.currentNavSelection);
  }

  onShoppingListNavClicked(){
    this.currentNavSelection = 'Shopping List';
    console.log(this.currentNavSelection);
  }
}
