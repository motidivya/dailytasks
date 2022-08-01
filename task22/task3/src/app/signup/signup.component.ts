import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  usernameInvalid: boolean = false;
  signupForm!: FormGroup;
  user:any = {};
  constructor(private fb:FormBuilder) { }
  onSubmit(): void {
    console.warn('Your Are Successfully Registered Now', this.signupForm.value);
    this.signupForm.reset();
    this.user = Object.assign(this.user, this.signupForm.value);
    localStorage.setItem('Users', JSON.stringify(this.user));
  }
  ngOnInit(): void {
    // this.signupForm = new FormGroup({
    //   username : new FormControl(null, Validators.required),
    //   email : new FormControl(null, [Validators.required, Validators.email]),
    //   password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
    // });
    this.createSignupForm();
  }

  createSignupForm(){
    this.signupForm = this.fb.group({
        username : new FormControl(null, Validators.required),
        email : new FormControl(null, [Validators.required, Validators.email]),
        password : new FormControl(null, [Validators.required, Validators.minLength(8)])
    }, {validators: this.usernameValidator})
  }

  get username(){
    return this.signupForm.get('username') as FormControl;
  }

  get email(){
    return this.signupForm.get('email') as FormControl;
  }

  get password(){
    return this.signupForm.get('password') as FormControl;
  }


  function usernameValidator (username : string): ValidatorFn {
    return fg.get('username')?.value[0] === '@'?null:{ usernameInvalid:true};
  }
}