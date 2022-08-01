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
  userNotFound = true;
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    try{
      var users = JSON.parse(localStorage.getItem('allUsers')!);
      for(let i = 0; i< users.length; i++){
        if(users[i].username === this.userModel.username){
          if(users[i].password === this.userModel.password){
            var user = {
              "username": this.userModel.username,
              "email": this.userModel.email,
              "password": this.userModel.password
            };
            localStorage.setItem("user", JSON.stringify(user));
            this.router.navigate(['']);

          }
        }
      }
    }
    catch{
      console.log('No Users Yet');
    }
    // if(users.username == this.userModel.username && users.password == this.userModel.password){
    //   localStorage.setItem('userIsLoggedIn', JSON.stringify(true));
    //   this.userNotFound= false;
    //   this.router.navigate(['']);
    // }
    console.log(users.username);
    // this.userNotFound=true;
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
