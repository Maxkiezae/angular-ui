import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  username = localStorage.getItem('username') || 'Guest';
  token = ''

  constructor() { 
    let locals = localStorage.getItem('token') || '';
    let obj = JSON.parse(locals);
    this.token = obj?.data?.token || 'No token found';

  }
}
