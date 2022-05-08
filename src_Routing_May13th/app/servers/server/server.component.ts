import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.servcie';
import {Router} from '@angular/router'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server : {name : string, status : string};

  constructor(private serverSrvObj : ServerService, private router : Router) { }
  serverName = '';
  serverStatus = '';
  ngOnInit() {
    this.server = this.serverSrvObj.getServer(1);
  }

  onHome(){
      this.router.navigate([""]);
  }
}
