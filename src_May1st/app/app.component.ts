import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  primaryNumbers = [
    {num : 1, type: 'odd'},
    {num : 2, type: 'Prime'},
    {num : 3, type: 'Prime'},
    {num : 4, type: 'Even'},
    {num : 5, type: 'Prime'}
  ];

  value = 1;

  oddNumbers: number[] = [];
  evenNumbers : number[] = [];

  onEachInterval(num : number){
      if(num%2 == 0){
        this.evenNumbers.push(num);
      }else{
        this.oddNumbers.push(num);
      }
  }
  displayOdd = false;
  btnText = "Display Only Even";
  OnbtnClick(){
      this.displayOdd = !this.displayOdd;
      if(!this.displayOdd){
        this.btnText = "Display Only Even";
      }else{
        this.btnText = "Display Only Odd";
      }
  }
}
