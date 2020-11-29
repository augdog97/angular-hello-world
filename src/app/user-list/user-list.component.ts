import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
// names is typed as an array of strings. 
  names: string[ ];
  constructor() { 
    this.names = ['August', 'John', 'Leah'];
  }
  
  ngOnInit(): void {
  }

}
