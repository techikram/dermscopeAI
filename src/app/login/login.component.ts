import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // You can handle the login logic here, such as sending the username and password to a backend server for authentication
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Reset the form after submission
    this.username = '';
    this.password = '';
  }
}
