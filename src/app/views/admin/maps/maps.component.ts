import {Component, AfterViewInit, ViewChild, ElementRef, OnInit} from "@angular/core";
import {createPopper} from "@popperjs/core";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls : ['./maps.component.css']
})
export class MapsComponent implements AfterViewInit, OnInit {
  constructor() {}

   dropdownPopoverShow = false;
  @ViewChild("btnDropdownRef", { static: false }) btnDropdownRef: ElementRef;
  @ViewChild("popoverDropdownRef", { static: false })
  popoverDropdownRef: ElementRef;
  ngAfterViewInit() {
    createPopper(
      this.btnDropdownRef.nativeElement,
      this.popoverDropdownRef.nativeElement,
      {
        placement: "bottom-end",
      }
    );
  }

  toggleDropdown(event) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  ngOnInit(): void {
  }
}
