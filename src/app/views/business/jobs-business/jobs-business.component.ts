import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-business',
  templateUrl: './jobs-business.component.html',
  styleUrls: ['./jobs-business.component.scss']
})
export class JobsBusinessComponent implements OnInit {

  settings = {
  columns: {
    id: {
      title: 'ID',
    },
    name: {
      title: 'Full Name'
    },
    username: {
      title: 'User Name'
    },
    email: {
      title: 'Email'
    }
  },
    attr: {
        class: 'tableChanged ',
      }
};
data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },

  // ... list of items

  {
    id: 11,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz'
  },
  {
    id: 12,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz'
  },
  {
    id: 13,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz'
  },
  {
    id: 4,
    name: 'Nicholas DuBuque',
    username: 'Nicholas.Stanton',
    email: 'Rey.Padberg@rosamond.biz'
  }
];

  constructor() { }

  ngOnInit(): void {
  }





}
