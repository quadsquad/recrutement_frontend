import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  firstname = '';
  lastname =  '';
  country = '';
  city = '';
  email = '';
  userPicture = '';

  constructor() { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('data')).role === 'admin') {
      this.firstname = JSON.parse(localStorage.getItem('data')).firstname;
      this.lastname = JSON.parse(localStorage.getItem('data')).lastname;
      this.country = JSON.parse(localStorage.getItem('data')).country;
      this.city = JSON.parse(localStorage.getItem('data')).city;
      this.email = JSON.parse(localStorage.getItem('data')).email;
      this.userPicture = JSON.parse(localStorage.getItem('data')).userPicture;
    }
  }

}
