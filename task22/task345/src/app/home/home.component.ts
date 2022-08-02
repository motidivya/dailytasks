import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: User;
  users!:[User];
  page:number = 1;
  customers!:any;
  
  constructor(private service: CustomerService) { }
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
    this.service.getCustomers().subscribe(response=>{
      this.customers = response;
    });
  }

}
