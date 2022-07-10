import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICourse, IUser } from '../shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/data/';
    
    constructor(private http: HttpClient) { }

    getUsers()  {
        return this.http.get<IUser[]>(this.baseUrl + 'users.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getUser(id: number)  {
        return this.http.get<IUser[]>(this.baseUrl + 'users.json')
        .pipe(
          map(users => {
            let user = users.filter((us: IUser) => us.id === id);
            return (user && user.length) ? user[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getCourses()  {
        return this.http.get<ICourse[]>(this.baseUrl + 'courses.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    getCourse(id: number)  {
        return this.http.get<ICourse[]>(this.baseUrl + 'courses.json')
        .pipe(
          map(courses => {
            let course = courses.filter((cou: ICourse) => cou.id === id);
            return (course && course.length) ? course[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    // getCustomers()  {
    //     return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    //         .pipe(
    //             catchError(this.handleError)
    //         );
    // }
    
    // getCustomer(id: number) {
    //   return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
    //     .pipe(
    //       map(customers => {
    //         let customer = customers.filter((cust: ICustomer) => cust.id === id);
    //         return (customer && customer.length) ? customer[0] : null;
    //       }),
    //       catchError(this.handleError)
    //     )
    // }

    // getOrders(id: number) {
    //   return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
    //     .pipe(
    //       map(orders => {
    //         let custOrders = orders.filter((order: IOrder) => order.customerId === id);
    //         return custOrders;
    //       }),
    //       catchError(this.handleError)
    //     );
    // }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return throwError(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return throwError(error || 'Node.js server error');
    }

}