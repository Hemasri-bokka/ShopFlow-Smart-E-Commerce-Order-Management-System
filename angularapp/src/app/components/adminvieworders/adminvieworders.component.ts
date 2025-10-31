import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-adminvieworders',
  templateUrl: './adminvieworders.component.html',
  styleUrls: ['./adminvieworders.component.css']
})
export class AdminviewordersComponent implements OnInit {

  constructor(private ser: OrderService, private snackBar: MatSnackBar) { }
  dataSource = new MatTableDataSource<Order>();
  // statusOptions: string[] = ['PENDING', 'ACCEPTED', 'PACKED', 'SHIPPED', 'DELIVERED', 'OUT FOR DELIVERY', 'CANCEL', 'RETURN'];
  statusOptions: string[] = ['pending', 'accepted', 'packed', 'shipped', 'delivered', 'out for delivery', 'cancel', 'return', 'processing'];
  displayedColumns: string[] = [
    'sno', 'orderId', 'username', 'productName', 'price', 'shippingAddress', 'totalAmount', 'quantity', 'status'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit(): void {
    this.getOrders();
  }


  getOrders() {
    this.ser.getOrders().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  updateStatus(order: Order): void {
    this.ser.updateOrderStatus(order.orderId, order).subscribe({
      next: () => {
        this.snackBar.open(`Order ${order.orderId} status updated to ${order.status}`, 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: 'right',
          verticalPosition: 'top'

        });
      },
      error: (err) => {
        console.error('Error updating status:', err);
        this.snackBar.open('Failed to update order status. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  filterByStatus(status: string) {
    this.dataSource.filter = status.trim().toLowerCase();
  }





}

