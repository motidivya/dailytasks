import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerListComponent } from './customerlist/customerlist.component';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [ CustomersComponent, CustomerListComponent ],
  imports: [
    CommonModule,
  ],
  providers: [],
  bootstrap: [CustomersComponent],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
