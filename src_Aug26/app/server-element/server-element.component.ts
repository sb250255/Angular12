import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element : {name:string, content : string, type: string};
  displayPanelBody = true;
  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(){
    this.displayPanelBody = !this.displayPanelBody;
  }

}
