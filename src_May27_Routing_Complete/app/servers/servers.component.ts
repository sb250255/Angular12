import { Component, OnInit } from '@angular/core';
import {ServerService} from '../servers/server.servcie'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private serverSrvObj : ServerService, private router : Router, private route : ActivatedRoute) { }
  servers :{ id: number, name : string, status : string}[] = [];
  
  ngOnInit() {
      this.servers = this.serverSrvObj.getServers();
  }
  onLoadServers(){
    this.router.navigate(['/servers'], {relativeTo : this.route});
  }
}
