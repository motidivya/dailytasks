import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userIsLoggedIn = false;
  user!: User;
  constructor() { }

  checkLoggedIn(): void{
    var getLogin = JSON.parse(localStorage.getItem('userIsLoggedIn') || '{}');
    if(getLogin){
      this.userIsLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem('Users') || '{}')
    }
  }
  ngOnInit(): void {
    this.checkLoggedIn();
  }

}
