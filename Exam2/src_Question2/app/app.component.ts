import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

    
   
  }

  ngOnInit(){
   
  }
  
  items = [
							{name: 'Computer', price: 500, condition:'New',brand : 'Lenovo', published:'01/11/2017'},
							{name: 'Phone', price: 200, condition:'New',brand : 'Samsung', published:'02/11/2016'},
							{name: 'Printer', price: 300, condition:'New',brand : 'Brother', published:'06/11/2015'},
							{name: 'Dishwasher', price: 250, condition:'Second-Hand',brand : 'WhirlPool', published:'01/12/2015'},
		 ];
  
 
 
 
}
