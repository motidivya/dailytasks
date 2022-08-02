import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://www.w3schools.com/angular/customers.php';
  httpParams! : HttpParams;
  constructor(private httpClient: HttpClient) { }

  getCustomers():Observable<any>{
    var response = JSON.parse(JSON.stringify(this.httpClient.get(this.url)));
    if(response['source']['source']['source']){
      return this.httpClient.get('../../assets/data.json');
    }
    return this.httpClient.get(this.url);
  }
}