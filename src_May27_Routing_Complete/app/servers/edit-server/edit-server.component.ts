import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.servcie';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(private serverSrvObj :ServerService, private route : ActivatedRoute) { }

  server : {name : string, status : string};

  serverName = '';
  serverStatus = '';
  allowEdit = true;
  ngOnInit() {

    console.log("Query Params outside : "+this.route.snapshot.queryParams['userName']);
    console.log("Query Params outside : "+ this.route.snapshot.queryParams['allowEdit']);
    console.log("Query Params outside : "+this.route.snapshot.queryParams['password']);

    this.route.queryParams.subscribe(
      (params : Params) => {
          console.log("Query Params are : "+ params['allowEdit']);
          console.log("Query Params are : "+ params['userName']);
          console.log("Query Params are : "+ params['password']);

          if(params['allowEdit'] !== undefined && params['allowEdit'] == '0'){
            this.allowEdit = false
          }
      }

      
    )

    this.route.params.subscribe(
      (params : Params) => {
          if(params['id'] !== undefined){
            this.server = this.serverSrvObj.getServer(params['id']);
          }
      }
    )

    this.server = this.serverSrvObj.getServer(this.route.snapshot.params['id']);

    if(this.server){
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      }
  }
  

}
