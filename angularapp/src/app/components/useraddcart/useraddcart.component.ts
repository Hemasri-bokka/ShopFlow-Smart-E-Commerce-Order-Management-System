import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-useraddcart',
  templateUrl: './useraddcart.component.html',
  styleUrls: ['./useraddcart.component.css']
})
export class UseraddcartComponent implements OnInit {
    shippingAddress: string = '';
    cartItems: any[] = [];
    userId = this.aes.getUserId() ;
    displayedColumns: string[] = ['name', 'price', 'quantity', 'actions'];
  
    constructor(private productService: ProductService, private orderService: OrderService, private aes: AuthService, private snackBar: MatSnackBar) {}
  
    ngOnInit(): void {
      this.productService.cart$.subscribe(cart => this.cartItems = cart);
    }
  
    removeItem(item: any): void {
      this.productService.removeFromCart(item);
    }
  
    getBaseTotal(): number {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    
    getGST(): number {
      const gst = this.getBaseTotal() * 0.18; // 18% GST
      return parseFloat(gst.toFixed(2));
    }
    
    getDeliveryCharge(): number {
      return this.getBaseTotal() * 0.03; // 3% Delivery
    }
    
    getTotal(): number {
      const total = this.getBaseTotal() + this.getGST() + this.getDeliveryCharge();
      return parseFloat(total.toFixed(2)); 
    }

    
    increaseQuantity(item: any): void {
      item.quantity += 1;
      this.updateCart();
    }
    
    decreaseQuantity(item: any): void {
      if (item.quantity > 1) {
        item.quantity -= 1;
        this.updateCart();
      }
    }
    
    updateCart(): void {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.productService.refreshCart(this.cartItems);
    }
   


  placeOrder(): void {
   if (!this.shippingAddress.trim()) {
      alert('Please enter a shipping address.');
      return;
    }

    const order: Order = {
      user: { userId: +this.userId}, // Replace with AuthService user
      product: this.cartItems,
      shippingAddress: this.shippingAddress,
      totalAmount: this.getTotal(),
      quantity: this.cartItems.reduce((sum, item) => sum + item.quantity, 0),
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.orderService.placeOrder(order).subscribe({
      next: () => {
        this.cartItems.forEach(item => {
                  const newQuantity = item.availableQuantity - item.quantity;
                  this.productService.updateProduct(item.productId, { ...item, availableQuantity: newQuantity })
                    .subscribe({
                      next: () => console.log(`Stock updated for product ${item.productId}`),
                      error: err => console.error('Error updating stock:', err)
                    });
                  });

                  this.snackBar.open(`Order Placed Successfully`, 'Close', {
                    duration: 3000,
                    panelClass: ['snackbar-success'],
         
                  });
        // alert('Order placed successfully!');
        localStorage.removeItem('cart');
        this.cartItems = [];
        this.shippingAddress = '';
      },
      error: (err) => console.error('Error placing order:', err)
    });
  }
}


// placeOrder(): void {
//   if (!this.shippingAddress.trim()) {
//     alert('Please enter a shipping address.');
//     return;
//   }

//   const order: Order = {
//     user: { userId: +this.userId },
//     product: this.cartItems,
//     shippingAddress: this.shippingAddress,
//     totalAmount: this.getTotal(),
//     quantity: this.cartItems.reduce((sum, item) => sum + item.quantity, 0),
//     status: 'Pending',
//     createdAt: new Date(),
//     updatedAt: new Date()
//   };

//   this.orderService.placeOrder(order).subscribe({
//     next: () => {
//       this.cartItems.forEach(item => {
//         const newQuantity = item.availableQuantity - item.quantity;
//         this.productService.updateProduct(item.productId, { ...item, availableQuantity: newQuantity })
//           .subscribe({
//             next: () => console.log(`Stock updated for product ${item.productId}`),
//             error: err => console.error('Error updating stock:', err)
//           });
//       });

//       alert('Order placed successfully!');
//       localStorage.removeItem('cart');
//       this.cartItems = [];
//       this.shippingAddress = '';
//       this.productService.refreshCart([]);
//     },
//     error: (err) => console.error('Error placing order:', err)
//   });
// }
