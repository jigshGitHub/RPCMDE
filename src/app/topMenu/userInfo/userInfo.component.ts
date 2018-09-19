import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userInfo',
  templateUrl: './userInfo.component.html'
  //,styleUrls: ['./userInfo.component.css']
})
export class UserInfoComponent implements OnInit {
  userName:string;
  userRole:string;
  constructor() {
  }

  ngOnInit() {
    this.userName = "Jignesh Shah";
    this.userRole = "System Admin";
  }

}
