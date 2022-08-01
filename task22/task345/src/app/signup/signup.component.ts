import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userModel = new User('', '', '');
  usernameHasError = true;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.addEntry();
    this.router.navigate(['login']);
  }
  
  validateUsername(value: string){
    var pattern = new RegExp('^@.*');
    
    if(pattern.test(value)){
      this.usernameHasError = false;
    }else{
      this.usernameHasError = true;
    }
  }

  addEntry() {
    // Parse any JSON previously stored in allEntries
    var existingUsers = JSON.parse(localStorage.getItem("allUsers")!);
    if(existingUsers == null) existingUsers = [];
    var newUsername = this.userModel.username;
    var newEmail = this.userModel.email;
    var newPassword = this.userModel.password;
    var user = {
        "username": newUsername,
        "email": newEmail,
        "password": newPassword
    };
    // localStorage.setItem("user", JSON.stringify(user));
    // Save allEntries back to local storage
    existingUsers.push(user);
    localStorage.setItem("allUsers", JSON.stringify(existingUsers));
  };
}
