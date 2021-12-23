import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-business',
  templateUrl: './profile-business.component.html',
  styleUrls: ['./profile-business.component.css']
})
export class ProfileBusinessComponent implements OnInit {

  business_name = '';
  email = '';
  phonenumber = '';
  address = '';
  business_website = '';
  business_logo = '';

  constructor() { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('data')).role === 'Business') {
      this.business_name = JSON.parse(localStorage.getItem('data')).business_name;
      this.email = JSON.parse(localStorage.getItem('data')).email;
      this.phonenumber = JSON.parse(localStorage.getItem('data')).phonenumber;
      this.address = JSON.parse(localStorage.getItem('data')).address;
      this.business_website = JSON.parse(localStorage.getItem('data')).business_website;
      this.business_logo = JSON.parse(localStorage.getItem('data')).business_logo;
    }
  }

}
