import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 myName = "montreal information tech";

 da = new Date();

 servers = ['Test Server', 'PreProd Server', 'Prod Server', 'UT Server', 'TA Server'];

 Amount = 230
 OnAddSrv() {
  this.servers.push('Test Server');
 }

 rows = 3;

 Employees = [
   
  {name : 'Jhon', id:101, salary:25000,country:'canada',joinDate:new Date(2010,10,11),department:'computers'},
  {name : 'Jack', id:102, salary:35000,country:'usa',joinDate:new Date(2011,10,11),department:'math'},
  {name : 'Ram', id:103, salary:45000,country:'canada',joinDate:new Date(2012,10,11),department:'computers'},
  {name : 'Bob', id:104, salary:55000,country:'usa',joinDate:new Date(2013,10,11),department:'chemist'},
  {name : 'Foo', id:105, salary:65000,country:'canada',joinDate:new Date(2014,10,11),department:'computers'},
  {name : 'Papa', id:106, salary:75000,country:'australia',joinDate:new Date(2015,10,11),department:'computers'},
  {name : 'King', id:107, salary:85000,country:'canada',joinDate:new Date(2017,10,11),department:'math'},
  {name : 'Queen', id:108, salary:95000,country:'usa',joinDate:new Date(2016,10,11),department:'computers'},
  {name : 'Daniel', id:109, salary:15000,country:'canada',joinDate:new Date(2009,10,11),department:'chemist'},
]
getCurrency(param : string) : string{
    if(param == "canada"){
      return 'CAD';
    }else if(param == "usa"){
      return 'USD';
    }else{
      return 'AUD';
    }
}
}
