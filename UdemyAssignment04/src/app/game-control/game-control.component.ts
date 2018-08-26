import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  incrementor: number = 0;
  @Output()
  tick = new EventEmitter<number>();
  timer;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.timer = setInterval(() => {
      this.tick.emit(this.incrementor++)
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.timer);
  }

}
