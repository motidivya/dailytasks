import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://www.w3schools.com/angular/customers.php';
   
  constructor(private httpClient: HttpClient) { }
  
  getCustomers(){
    return this.httpClient.get(this.url);
  }
  
}