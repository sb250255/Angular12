import {Component} from '@angular/core'

@Component({
    selector : 'app-server',
    templateUrl: './server.component.html',
    styles : [
        `
            .active{
                    color : green
            }
            .notActive{
                    color : red
            }

            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
              }
              
              td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
              
              tr:nth-child(even) {
                background-color: #dddddd;
              }
        `
    ]
})

export class ServerComponent{
    serverStatus = "Not Up & Not Running"
    SetStatus = false;
    data = "This text is from server"
    uname;
    srvStatus = false;
    servers = [{name : "server1", status : true},{name : "server2", status : false},{name : "server3", status : true},{name : "server4", status : false}];
    constructor() {
        setTimeout(() => {
          this.SetStatus = true;
        }, 20000);
      }
      onClick (){
          this.SetStatus = true;
      }

      OnReset(){
            this.uname = '';
      }
      onCheckStatus(){
          this.srvStatus = !this.srvStatus
      }
      getSrvStatus() : boolean{
          if(this.srvStatus == true){
              return true;
          }else{
              return  false;
          }
      }
      getStyleBgColor() : string{
          return this.srvStatus? 'green' : 'red';
      }
      dates = [];
      passwordHint : boolean = false;
      onLog() {
          this.passwordHint = !this.passwordHint;
            this.dates.push(new Date());
      }
}
