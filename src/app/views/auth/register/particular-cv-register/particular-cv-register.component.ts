import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particular-cv-register',
  templateUrl: './particular-cv-register.component.html',
  styleUrls: ['./particular-cv-register.component.css']
})
export class ParticularCvRegisterComponent implements OnInit {

  firstname = '';
  lastname = '';
  email = '';
  country = '';
  city = '';

  constructor() { }

  handlePrint() {
    window.print();
  }

  ngOnInit(): void {
    if (localStorage.getItem('ParticularInfo') !== 'null') {
      this.firstname = JSON.parse(localStorage.getItem('ParticularInfo')).firstname;
      this.lastname = JSON.parse(localStorage.getItem('ParticularInfo')).lastname;
      this.email = JSON.parse(localStorage.getItem('ParticularInfo')).email;
      this.country = JSON.parse(localStorage.getItem('ParticularInfo')).country;
      this.city = JSON.parse(localStorage.getItem('ParticularInfo')).city;
    }
  }

}
