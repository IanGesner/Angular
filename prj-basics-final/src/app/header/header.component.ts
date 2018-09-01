import { Component, Output, EventEmitter } from '@angular/core';
import { SelectedView } from '../shared/selected-view.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output()
  viewSelect =  new EventEmitter<SelectedView>();


  constructor() { }

  ngOnInit() {
  }

  onSelectRecipes(){
    this.viewSelect.emit(SelectedView.Recipes);
  }

  onSelectShoppingList(){
    this.viewSelect.emit(SelectedView.ShoppingList);
  }
}
