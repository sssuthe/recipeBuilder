import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameContentInput: ElementRef;//This is how we get a reference to the referenced component in the html, also ElementRef is an angular type that will have a property 
  @ViewChild('amountInput') amountContentInput: ElementRef;//This is how we get a reference to the referenced component in the html, also ElementRef is an angular type that will have a property 

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredients(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameContentInput.nativeElement.value, this.amountContentInput.nativeElement.value));
  }
}
