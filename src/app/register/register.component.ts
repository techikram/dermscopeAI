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
  number: string = '';
  hospitalName: string = ''; 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
   
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Number:', this.number);
    console.log('Hospital Name:', this.hospitalName);
  
    this.username = '';
    this.email = '';
    this.password = '';
    this.number = '';
    this.hospitalName = '';
  }
}
