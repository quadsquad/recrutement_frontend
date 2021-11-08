import {Component, Input, OnInit} from '@angular/core';
import {ServiceServiceService} from "../../../services/serviceoffred/service-service.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  dataServices: any=[];
  constructor(private ser: ServiceServiceService, private router : Router) { }

  ngOnInit(): void {

    this.ser.getAllServices().subscribe((res : [])=>{
      this.dataServices=res
    }, (err)=>{
      console.log(err);
    });
  }
  delete(id)
  {
    this.ser.servicedelete(id).subscribe(
      res => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Service deleted Successfully'
        });

      }
    );
  }
}
