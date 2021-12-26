import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css']
})
export class AuthRegisterComponent implements OnInit {

  goToHomepage() {
    this.router.navigate(['/']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem("role", null);
  }

}
