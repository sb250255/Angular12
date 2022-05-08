import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

 accounts = [
     {name : 'Test Account', status : 'active'},
     {name : 'Savings Account', status : 'unknown'},
     {name : 'Chequing Account', status : 'inactive'},
     {name : 'Credit Account', status : 'active'},
]

} // End of class
