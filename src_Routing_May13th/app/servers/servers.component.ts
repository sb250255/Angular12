import { Component, OnInit } from '@angular/core';
import {ServerService} from '../servers/server.servcie'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private serverSrvObj : ServerService) { }
  servers :{ id: number, name : string, status : string}[] = [];
  
  ngOnInit() {
      this.servers = this.serverSrvObj.getServers();
  }



}
