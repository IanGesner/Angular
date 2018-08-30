import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectedView } from '../../shared/selected-view.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  viewSelect =  new EventEmitter<SelectedView>();


  constructor() { }

  ngOnInit() {
  }

  onSelectRecipes(){
    console.log('recipes');
    this.viewSelect.emit(SelectedView.Recipes);
  }

  onSelectShoppingList(){
    this.viewSelect.emit(SelectedView.ShoppingList);
  }
}
