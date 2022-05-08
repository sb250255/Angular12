import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit {

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource = [];

  private users : UserData[] = [];
  constructor() {
    // Create 100 users
    
    for (let i = 1; i <= 100; i++) { this.users.push(createNewUser(i)); }

      console.log(this.users);
  }

  ngOnInit(){

  }

}

function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
