import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

serverElements = [{name : "TestServer", content : "This is test server", type : "server"}, {name : "TestServer1", content : "This is test server1", type : "blueprint"}];


ServerAdded(serverData : {name:string, content:string}){

  this.serverElements.push({
    name : serverData.name,
    content : serverData.content,
    type : "server"
  })
}

BlueprintAdded(serverData : {name:string, content:string}){
  this.serverElements.push({
    name : serverData.name,
    content : serverData.content,
    type : "blueprint"
  })
}
 
 
}
