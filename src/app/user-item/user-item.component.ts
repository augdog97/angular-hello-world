import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  // Declaring  a property of name to have a type of string.
  // Assigning a type to a variable is what Typescript is. By setting the type of string to name the compiler ensures that the name variable will always be a string and throw an error if we try to assign anything else such as a number.
  // @Input() allows us to pass in a value from the parent template (User-List).
  @Input() name!: string; 
// Constructor is a function. Anything that is inside constructor will run anytime an instance of app-user-item is created. 
  constructor() { 
  }

  ngOnInit(): void {
  }

}
