import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-adminvieworders',
  templateUrl: './adminvieworders.component.html',
  styleUrls: ['./adminvieworders.component.css']
})
export class AdminviewordersComponent implements OnInit {

  constructor(private ser : OrderService) { }
  orders: Order[] = [];
  statusOptions: string[] = ['PENDING', 'ACCEPTED', 'PACKED', 'SHIPPED', 'DELIVERED', 'OUT FOR DELIVERY', 'CANCEL', 'RETURN'];

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.ser.getOrders().subscribe(data => {
      this.orders = data;
    })

    // this.orders = [
    //   {
    //     orderId: 1,
    //     user: {
    //       userId: 101,
    //       username: 'test_user'
    //     },
    //     product: [
    //       {
    //         productId: 201,
    //         name: 'Sample Product',
    //         price: 100
    //       }
    //     ],
    //     shippingAddress: 'Bangalore',
    //     totalAmount: 100,
    //     quantity: 1,
    //     status: 'PENDING',
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ];

  }

  updateStatus(order: Order): void {
    this.ser.updateOrderStatus(order.orderId, order.status).subscribe({
      next: () => console.log(`Order ${order.orderId} status updated to ${order.status}`),
      error: (err) => console.error('Error updating status:', err)
    });
  }
}

