import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: User;
  users!:[User];
  constructor() { }

  checkLoggedIn(): void{
    try{
      var users = JSON.parse(localStorage.getItem('allUsers')!);
      this.users = users;
      var user = JSON.parse(localStorage.getItem('user')!);
      this.user = user;
      
    }
    catch{
      console.log('Not logged in');
    }
  }
  ngOnInit(): void {
    this.checkLoggedIn();
  }

}
