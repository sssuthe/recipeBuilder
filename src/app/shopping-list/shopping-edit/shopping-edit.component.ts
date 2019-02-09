import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();//need to decorate with output so we can expose this event outward
  
  @ViewChild('nameInput') nameContentInput: ElementRef;//This is how we get a reference to the referenced component in the html, also ElementRef is an angular type that will have a property 
  @ViewChild('amountInput') amountContentInput: ElementRef;//This is how we get a reference to the referenced component in the html, also ElementRef is an angular type that will have a property 

  constructor() { }

  ngOnInit() {
  }

  onAddIngredients(){
    this.ingredientAdded.emit(new Ingredient(this.nameContentInput.nativeElement.value, this.amountContentInput.nativeElement.value));
  }
}
