import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
})
export class AdminNavbarComponent implements OnInit {
  isConnected: boolean;
  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('data') === 'null') {
      this.isConnected = false;
    }
    if (JSON.parse(localStorage.getItem('data')).role === 'admin') {
      this.isConnected = true;
    }
  }
}
