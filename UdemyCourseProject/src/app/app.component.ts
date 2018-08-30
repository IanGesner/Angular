import { Component } from '@angular/core';
import { SelectedView } from './shared/selected-view.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SelectedView = SelectedView;
  selected: SelectedView = SelectedView.Recipes;

  onViewSelected(view: SelectedView) {
    console.log('selected');
    this.selected = view;
  }


}
