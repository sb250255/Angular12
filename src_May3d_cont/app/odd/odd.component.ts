import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges, DoCheck {

  @Input() number :number;

  constructor() { }

  ngOnInit() {
  }

ngOnChanges(){
  console.log("On chnage has been called");
}
 ngDoCheck(){
   
 }

}
