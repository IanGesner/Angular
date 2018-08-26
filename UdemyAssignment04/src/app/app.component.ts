import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
  }

  onClockTick(incrementor){
    if (incrementor % 2 === 0)
      this.evenNumbers.push(incrementor);
    else
      this.oddNumbers.push(incrementor);
  }
}
