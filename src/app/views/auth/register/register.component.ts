import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {RegisterService} from '../../../services/register.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {

  formRegister : FormGroup ;
  registerUser;
  public show = false;
  public buttonName:any = 'Show';
  public showR = false;
  public buttonNameR:any = 'Show';
  public showE = false;
  public buttonNameE:any = 'Show';


  public internship:any='stagiaire';
  public employee:any='employee';
  public recruiteur:any='recruiteur';

  public roleChoosed ='';

  constructor(private registerService : RegisterService ,private formBuilder: FormBuilder,private router: Router
  ) {
    this.formRegister = formBuilder.group({
      role: ['', Validators.required],
      fullname:['',[Validators.required, Validators.minLength(3)]],
      age:['',[Validators.required, Validators.pattern(/^(?:1[8-9]|[2-5][0-9]|70)$/)]],
      email:['',[Validators.required,Validators.email]],
      speciality:['',[Validators.required]],
      diploma:['',[Validators.required]],
      entreprise_name:['',[Validators.required,Validators.minLength(3)]],
      entreprise_domaine:['',[Validators.required,Validators.minLength(3)]],
      username : ['',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(4),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required,
        RegisterComponent.validUsername
      ])],
      password : ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]

    }, {
      validator: RegisterComponent.MustMatch('password', 'confirmPassword')
    });
  }

  static validUsername(fc: FormControl) {
    if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
      return ({validUsername: true});
    } else {
      return null;
    }
  }

 static  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
  ngOnInit(): void {

  }



  toggle() {
    this.show = !this.show;
    if(this.show){
      this.buttonName = 'Hide';
      this.roleChoosed='stagiaire';
    }

    else
      this.buttonName = 'Show';
      this.buttonNameE='hide';
      this.buttonNameR='hide';

  }
  toggle1() {
    this.showE = !this.showE;
    if(this.showE) {
      this.buttonNameE = 'Hide';
      this.roleChoosed = 'employee';
    }
  else
      this.buttonNameE = 'Show';
      this.buttonName='hide';
      this.buttonNameR='hide';


  }

  toggle2() {
    this.showR = !this.showR;
    if(this.showR) {
      this.buttonNameR = 'Hide';
      this.roleChoosed='recruiteur';

    }
    else
      this.buttonNameR = 'Show';
      this.buttonNameE='hide';
      this.buttonName='hide';

  }

  get password() { return this.formRegister.get('password'); }
  get fullname() { return this.formRegister.get('fullname'); }
  get age() { return this.formRegister.get('age'); }
  get email() { return this.formRegister.get('email'); }
  get speciality() { return this.formRegister.get('speciality'); }
  get entreprise_name() { return this.formRegister.get('entreprise_name'); }
  get entreprise_domaine() { return this.formRegister.get('entreprise_domaine'); }
  get username() { return this.formRegister.get('username'); }
  get diploma() { return this.formRegister.get('diploma'); }
  get confirmPassword(){ return this.formRegister.get('confirmPassword'); }
  get f() { return this.formRegister.controls; }


  signup()  : void {
    this.registerUser = {
      role : this.roleChoosed,
      fullname : this.formRegister.value.fullname,
      age : this.formRegister.value.age,
      email : this.formRegister.value.email,
      speciality : this.formRegister.value.speciality,
      diploma : this.formRegister.value.diploma,
      entreprise_name : this.formRegister.value.entreprise_name,
      entreprise_domaine : this.formRegister.value.entreprise_domaine,
      username : this.formRegister.value.username,
      password : this.formRegister.value.password
    };
    this.registerService.register(this.registerUser)
      .subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'User Registered Successfully'
          });
          this.router.navigateByUrl('/auth/login');

        }, error => {
          console.log(error);
        }
      )
  }



}
