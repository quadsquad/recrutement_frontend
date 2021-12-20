import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particular-cv-register',
  templateUrl: './particular-cv-register.component.html',
  styleUrls: ['./particular-cv-register.component.css']
})
export class ParticularCvRegisterComponent implements OnInit {

  constructor() { }

  handlePrint() {
    window.print();
  }

  ngOnInit(): void {
  }

}
