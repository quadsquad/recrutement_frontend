import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../../../services/authentication-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import {first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls : ['./login.component.css'],
  providers : [AuthenticationServiceService]
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup ;
  loginUser;
  user;
  constructor(private authentic : AuthenticationServiceService , private formBuilder: FormBuilder,private router: Router) {
      this.formLogin = formBuilder.group({
          username : ['',[Validators.required]],
          password : ['',[Validators.required,Validators.minLength(4)]]
      });

  }

  goToHomepage() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    })
  }

  getBackToAuthenticate() {
    this.router.navigate(['/auth/myworldspace']).then(() => {
      window.location.reload();
    })
  }

  ngOnInit(): void {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  login() : void {
      this.loginUser = {
           username : this.formLogin.value.username,
           password : this.formLogin.value.password
      };
      this.authentic.authenticate(this.loginUser.username,this.loginUser.password).pipe(first())
        .subscribe(
            response => {

              if(response.r == 'admin'){
                this.router.navigateByUrl('/admin/dashboard');



              } if(response.r =='stagiaire'){
                this.router.navigateByUrl('')

              }if (response.r == 'employee'){
                this.router.navigateByUrl('/profile');
              }

            }, error => {
              console.log(error);
          }
        )
  }

}
