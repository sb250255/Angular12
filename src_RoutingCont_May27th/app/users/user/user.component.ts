import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  routeSubscribe : Subscription;

  user : { id : number, name : string};
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
        this.user = {
          id : this.route.snapshot.params['id'],
          name : this.route.snapshot.params['name']
        }

     this.routeSubscribe = this.route.params.subscribe(
          (params : Params) => {
              console.log("URL Params were changed");
              this.user = {
                id : params['id'],
                name : params['name']
              }
          }
        )
  }

  ngOnDestroy(){
    this.routeSubscribe.unsubscribe();
  }

}
