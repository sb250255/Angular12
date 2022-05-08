import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  
  @Output() OnAddSrvClicked = new EventEmitter<{serverName: string, serverContent:string, serverType: string}>();
  @Output('BPClicked') onBluePrintClicked = new EventEmitter<{serverName: string, serverContent:string, serverType: string}>();
 // newServerName = '';
 // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput1 : ElementRef;
  
  constructor() {
   
   }

  ngOnInit() {
    this.serverContentInput1.nativeElement.value = "From typescript";
  }
  onAddServer(InputSrvName : HTMLInputElement) {
    
    
    console.log(InputSrvName.value);
    console.log(this.serverContentInput1.nativeElement.value);
   this.OnAddSrvClicked.emit({
     serverName : InputSrvName.value,
     serverContent : this.serverContentInput1.nativeElement.value,
     serverType : 'server'
   });
  }

  onAddBluePrint(InputSrvName: HTMLInputElement){
    this.onBluePrintClicked.emit({
      serverName : InputSrvName.value,
      serverContent : this.serverContentInput1.nativeElement.value,
      serverType : 'blueprint'
    });
  }

}
