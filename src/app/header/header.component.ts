import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeNavClicked = new EventEmitter();//need to decorate with output so we can expose this event outward
  @Output() shoppingListNavClicked = new EventEmitter();//need to decorate with output so we can expose this event outward
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(){
    this.recipeNavClicked.emit();//Let's raise the event
  }

  onShoppingListClicked(){
    this.shoppingListNavClicked.emit();//Raise the event for shopping list nav selection
  }
}
