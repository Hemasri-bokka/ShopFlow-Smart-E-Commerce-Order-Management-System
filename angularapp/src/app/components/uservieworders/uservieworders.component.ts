import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-uservieworders',
  templateUrl: './uservieworders.component.html',
  styleUrls: ['./uservieworders.component.css']
})
export class UserviewordersComponent implements OnInit {

  constructor(private orderService:OrderService, private authService:AuthService){}

  orders: Order[] = [];

  ngOnInit(): void {
    this.getUserOrders();
  }

getUserOrders(): void {
  const userId = +this.authService.getUserId(); // getting from localstorage
  this.orderService.getOrderByUserId(userId).subscribe({
    next: (data) => this.orders = data,
    error: (err) => console.error('Error fetching orders:', err)
  });
}
}