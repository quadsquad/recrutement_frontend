import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-navbar',
  templateUrl: './business-navbar.component.html',
  styleUrls: ['./business-navbar.component.css']
})
export class BusinessNavbarComponent implements OnInit {
  isConnected: boolean;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('data') === 'null') {
      this.isConnected = false;
    }
    if (JSON.parse(localStorage.getItem('data')).role === 'Business') {
      this.isConnected = true;
    }
  }

}
