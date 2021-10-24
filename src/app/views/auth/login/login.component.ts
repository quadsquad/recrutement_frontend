import { Component, OnInit } from "@angular/core";
import {AuthenticationServiceService} from "../../../services/authentication-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls : ["./login.component.css"],
  providers : [AuthenticationServiceService]
})
export class LoginComponent implements OnInit {

  formLogin : FormGroup ;
  loginUser;

  constructor(private authservice : AuthenticationServiceService , private formBuilder: FormBuilder) {
      this.formLogin = formBuilder.group({
          username : ['',[Validators.required]],
          password : ['',[Validators.required,Validators.minLength(4)]]
      });
  }

  ngOnInit(): void {
  }

  login() : void {
      this.loginUser = {
           username : this.formLogin.value.username,
           password : this.formLogin.value.password
      };
      this.authservice.authenticate(this.loginUser.username,this.loginUser.password)
        .subscribe(
            response => {
                alert("logged : "+this.loginUser.username);
            }, error => {
              console.log(error);
          }
        )
  }
}
