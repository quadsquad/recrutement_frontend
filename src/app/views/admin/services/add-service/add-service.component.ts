import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceServiceService} from "../../../../services/serviceoffred/service-service.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  serviceGroup : FormGroup ;
  newService;
  constructor(private s: ServiceServiceService,private router: Router,private formBuilder: FormBuilder) {

    this.serviceGroup = formBuilder.group({
      service_name: ['', Validators.required],
      service_description:['',[Validators.required, Validators.minLength(3)]],
      service_picture:['',[Validators.required]]
    });
  }


  ngOnInit(): void {
  }
  get service_name() { return this.serviceGroup.get('service_name'); }
  get service_description() { return this.serviceGroup.get('service_description'); }
  get service_picture() { return this.serviceGroup.get('service_picture'); }
  save(){
    this.newService={
      service_name : this.serviceGroup.value.service_name,
      service_description : this.serviceGroup.value.service_description,
      service_picture : this.serviceGroup.value.service_picture,

    };
    this.s.addService(this.newService).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Service added Successfully'
      });
      this.router.navigateByUrl('/admin/services')
    }, (error => { Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'There is something missing'
    });}))
  }


}
