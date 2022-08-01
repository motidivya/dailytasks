import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userModel = new User('@divyesh', '', '123456789');
  usernameHasError = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    var users = JSON.parse(localStorage.getItem('Users') || '{}');
    if(users.username == this.userModel.username && users.password == this.userModel.password){
      localStorage.setItem('userIsLoggedIn', JSON.stringify(true));
      this.router.navigate(['']);
    }
    console.log(users.username);
  }
  validateUsername(value: string){
    var pattern = new RegExp('^@.*');
    
    if(pattern.test(value)){
      this.usernameHasError = false;
    }else{
      this.usernameHasError = true;
    }
  }
}
