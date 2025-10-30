import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-uservieworders',
  templateUrl: './uservieworders.component.html',
  styleUrls: ['./uservieworders.component.css']
})
export class UserviewordersComponent implements OnInit {
orders :Order[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders(): void {
    const userId = +this.authService.getUserId();
    this.orderService.getOrderByUserId(userId).subscribe({
      next: (data) => {
        this.orders = data;
        this.loadProductDetails();
      },
      error: (err) => console.error('Error fetching orders:', err)
    });
  }

  loadProductDetails(): void {
    this.orders.forEach(order => {
      order.product.forEach((p: any, index: number) => {
        this.productService.getProductsById(p.id).subscribe({
          next: (fullProduct: Product) => {
            order.product[index] = fullProduct; // Replace with full details
          },
          error: (err) => console.error('Error fetching product details:', err)
        });
      });
    });
  }
  getProgressColor(status: string): 'primary' | 'accent' | 'warn' {
    switch (status) {
      case 'delivered': return 'primary'; // Blue
      case 'processing': return 'accent'; // Pink
      case 'cancelled': return 'warn';    // Red
      default: return 'primary';
    }
  }
  steps = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

  getProgressValue(status: string): number {
    const index = this.steps.indexOf(status);
    return index >= 0 ? (index / (this.steps.length - 1)) * 100 : 0;
  }
}