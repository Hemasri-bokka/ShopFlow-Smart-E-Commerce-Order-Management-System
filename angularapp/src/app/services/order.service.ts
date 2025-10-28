import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:8080';

  placeOrder(order:Order):Observable<any>{
    return this.http.post<any>(this.apiUrl,order);
  }

  deleteOrder(id:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getOrderDetails(orderId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }

  getOrderByUserId(userId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  getOrders():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  updateOrderStatus(id:number,order:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,order);
  }
}
