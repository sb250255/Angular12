import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  @Input() account;
  
  constructor() { }

  ngOnInit() {
  }

}
