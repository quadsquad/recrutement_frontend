// @ts-ignore
import { Component, OnInit } from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
