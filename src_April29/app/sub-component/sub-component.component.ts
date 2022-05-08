import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-component',
  templateUrl: './sub-component.component.html',
  styleUrls: ['./sub-component.component.css']
})
export class SubComponentComponent implements OnInit {

  // decorating the  child data and which holds the string 

  @Input() childData : string;
  // create an event 
  @Output() ChildChangedEvent = new EventEmitter<{text: string}>();

  subData = '';
  constructor() { }

  ngOnInit() {
  }
  OnKeyUP(){
    this.ChildChangedEvent.emit({
      text : this.subData
    })
  }
}
