import { 
  Directive, 
  HostBinding, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  OnInit, 
  Input} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;//Toggle the state
  }
}
