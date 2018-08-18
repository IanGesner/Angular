import { Component } from '@angular/core';
import { timer } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyAssignment03';
  clickedTimes = [];
  isHidden = false;
  
  constructor() {
    
  }

  onButtonClicked(event: Event){
    console.log('i\'m here');
    this.isHidden = !this.isHidden;
    this.clickedTimes.push(new Date().toISOString());
  }
}
