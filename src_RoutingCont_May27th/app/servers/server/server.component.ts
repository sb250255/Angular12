import { Component, OnInit, OnDestroy } from '@angular/core';
import {ServerService} from '../server.servcie';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server : {name : string, status : string};

  paramSubscribe : Subscription;
 _id;
  constructor(
    private serverSrvObj : ServerService, 
    private router : Router, 
    private route : ActivatedRoute) { }
  serverName = '';
  serverStatus = '';
  ngOnInit() {
     //this.server = this.serverSrvObj.getServer(1);
    this.server = {
      name : this.route.snapshot.params['name'],// url param name
      status : this.route.snapshot.params['status'] // url string from status obj
    }

    this.paramSubscribe = this.route.params.subscribe(
      (params : Params) => {
            this.server = {
              name : params['name'],
              status : params['status']
            }
      }
    )
    this._id  = this.route.snapshot.params['id'];

    if(this._id !== undefined){
      this.server = this.serverSrvObj.getServer(this._id);
    }
  }

  onLoadTestSrv(){
    this.router.navigate(['/servers','Test Server', 'OnLine']);
  }

  onHome(){
      this.router.navigate([""]);
  }

  ngOnDestroy(){
      // this.paramSubscribe.unsubscribe();
  }
}
