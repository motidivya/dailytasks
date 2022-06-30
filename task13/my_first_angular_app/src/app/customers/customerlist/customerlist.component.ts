import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerListComponent implements OnInit {
  
  filteredCustomers: any[] = [];
  customersOrderTotal!: number;
  currencyCode: string = 'USD';
  constructor() { }

  ngOnInit(){
  }

}
