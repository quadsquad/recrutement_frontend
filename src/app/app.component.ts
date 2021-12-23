import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'MY WORLD JOB';

  ngOnInit(): void {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', 'null');
    }
    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', 'null');
    }
  }
}
