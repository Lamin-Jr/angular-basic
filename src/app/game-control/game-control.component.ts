import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() timer = new EventEmitter<number>();
  constructor() {}

  protected myInterVal: any;
  startTime() {
    let counter = 0
    this.myInterVal = setInterval(() => {
      this.timer.emit(counter++)
      console.log('intervAL Start', counter);
    }, 200);
  }

  stopTime() {
    clearInterval(this.myInterVal);
  }
}
