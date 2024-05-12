import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  number: string = ''; // New field for number
  hospitalName: string = ''; // New field for hospital name

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // You can handle the registration logic here, such as sending the form data to a backend server
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Number:', this.number);
    console.log('Hospital Name:', this.hospitalName);
    // Reset the form after submission
    this.username = '';
    this.email = '';
    this.password = '';
    this.number = '';
    this.hospitalName = '';
  }
}
