import { Component } from '@angular/core';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  servers = [{name:"testSrv",content:"test srv content", type:"server"},{name:"testSrv",content:"test srv content", type:"server"}];
  //displayPanelBody = true;
  Subdata = '';
  OnAddServer(serverData : {serverName: string, serverContent:string, serverType: string}){
    this.servers.push({
      name:serverData.serverName,
      content : serverData.serverContent,
      type : serverData.serverType
    })
  }
  
  OnAddBluePrint(serverData : {serverName: string, serverContent:string, serverType: string}){
    this.servers.push({
      name:serverData.serverName,
      content : serverData.serverContent,
      type : serverData.serverType
    })
  }
  ChildChanged(childText : {text : string}){
    this.Subdata = childText.text
  }
}
