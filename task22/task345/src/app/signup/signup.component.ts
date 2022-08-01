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
    var retrievedObject = JSON.parse(localStorage.getItem("Users") || '{}');
    if(retrievedObject.value){
      console.log(typeof(retrievedObject.value));
    }else{
      localStorage.setItem('Users',JSON.stringify(this.userModel));
    }
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
}
