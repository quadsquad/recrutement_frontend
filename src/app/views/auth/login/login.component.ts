import { Component, OnInit } from '@angular/core';
import {AuthenticationServiceService} from '../../../services/authentication-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';

import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';


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
  btnLogin: any;
  isLoading = false;
  constructor(private authentic : AuthenticationServiceService , private toastr: ToastrService,
              private formBuilder: FormBuilder,private router: Router) {
      this.formLogin = formBuilder.group({
          email : ['',[Validators.required, Validators.email]],
          password : ['',[Validators.required,Validators.minLength(6)]]
      });

  }

  goToHomepage() {
    this.router.navigate(['/']);
    this.formLogin.reset();
  }

  getBackToAuthenticate() {
    this.router.navigate(['/auth/myworldspace']);
    this.formLogin.reset();
  }

  ngOnInit(): void {
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }

  login() {
      this.loginUser = {
           email : this.formLogin.value.email,
           password : this.formLogin.value.password
      };
      this.isLoading = true;
      setTimeout( () => this.isLoading = false, 2500 );
      this.authentic.authenticate(this.loginUser.email,this.loginUser.password).pipe(first())
        .subscribe(
            response => {
              if(response.r === 'admin'){
                this.router.navigateByUrl('/admin/dashboard').then(() => {
                  window.location.reload();
                });
              } if(response.r ==='Business'){
                this.router.navigateByUrl('')
              }if (response.r === 'Particular'){
                this.router.navigateByUrl('/profile');
              }
              if (!response.r) {
                this.toastr.error('INCORRECT EMAIL/PASSWORD');
                localStorage.removeItem('data');
                localStorage.removeItem('token');
              }

            }, error => {
              console.log(error);
          }
        )
  }

  btnLoginStyle() {
    if (this.formLogin.invalid) {
      this.btnLogin = {
        cursor: 'default',
        'pointer-events': 'none',
        opacity: '0.5'
      }
    } else {
      this.btnLogin = {
        cursor: 'pointer',
        opacity: '1'
      }
    }
    return this.btnLogin;
  }

}
