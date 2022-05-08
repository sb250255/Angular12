import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }
  @Output() IntervalStarted = new EventEmitter<number>();

  interval;
  number = 0;

  ngOnInit() {
  }
  onStart(){
    this.interval = setInterval(()=> {
      // Raise an event
      this.IntervalStarted.emit(this.number+1);
      this.number++;
    },1000);
  }
  onPause(){
      clearInterval(this.interval);
  }
}
