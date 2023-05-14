import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/data.json'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  categoryarray1 = [];
  categoryarray2 = [];
  categoryarray3 = [];
  constructor() { }

  ngOnInit(): void {
    data.painters.forEach(element => {

    })
    this.categoryarray1 = data.painters;

  }

}
