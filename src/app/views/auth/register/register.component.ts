import { Component, OnInit, OnChanges } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../../../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {

  formRegister : FormGroup ;
  registerUser;

  selectedOption;
  options;
  public show:any = "";
  public buttonName:any = 'Show';



  constructor(private registerService : RegisterService ,private formBuilder: FormBuilder) {
    this.formRegister = formBuilder.group({
      role : ['', [Validators.required]],
      fullname:['',[Validators.required]],
      age:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      speciality:['',[Validators.required,Validators.email]],
      diploma:['',[Validators.required,Validators.email]],
      entreprise_name:['',[Validators.required,Validators.email]],
      entreprise_domaine:['',[Validators.required,Validators.email]],
      username : ['',[Validators.required]],
      password : ['',[Validators.required,Validators.minLength(4)]]
    });
  }

  toggle() {
    this.show = !this.show;
    if(this.show == 'intership')
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

  ngOnInit(): void {
    this.options = [
      { name: "internship" },
      { name: "employee" },
      { name : "recruiteur"}
    ];
  }

/*  ngOnChanges():void{
    this.onChange();
  }
  onChange():void{
    for(let i = 0 ; i< this.options.size() ; i++){
        if(this.options[i].name == 'employee'){
              this.show = true;
        }else{
          this.show = false;
        }
    }
  }*/

  signup () : void {
    this.registerUser = {
      role : this.formRegister.value.role,
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
          alert("Account Created : "+this.registerUser.username);
        }, error => {
          console.log(error);
        }
      )
  }



}
