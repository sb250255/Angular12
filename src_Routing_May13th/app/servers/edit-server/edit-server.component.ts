import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.servcie';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(private serverSrvObj :ServerService) { }

  server : {name : string, status : string};

  serverName = '';
  serverStatus = '';

  ngOnInit() {

    this.server = this.serverSrvObj.getServer(1);

    if(this.server){
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      }
  }
  

}
