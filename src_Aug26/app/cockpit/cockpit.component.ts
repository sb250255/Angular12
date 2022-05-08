import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }
  @Output() OnAddSrvClicked = new EventEmitter<{serverName: string, serverContent:string, serverType: string}>();
  @Output() onBluePrintClicked = new EventEmitter<{serverName: string, serverContent:string, serverType: string}>();
  newServerName = '';
  newServerContent = '';

  ngOnInit() {
  }
  onAddServer() {
   this.OnAddSrvClicked.emit({
     serverName : this.newServerName,
     serverContent : this.newServerContent,
     serverType : 'server'
   });
  }

  onAddBluePrint(){
    this.onBluePrintClicked.emit({
      serverName : this.newServerName,
      serverContent : this.newServerContent,
      serverType : 'blueprint'
    });
  }

}
