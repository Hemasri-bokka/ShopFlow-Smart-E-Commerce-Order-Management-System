import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { APP_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
   }

 

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${APP_URL}/products`, product);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${APP_URL}/products?category=${category}`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${APP_URL}/products`);
  }

  getProductsByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${APP_URL}/products/${userId}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${APP_URL}/products/${id}`);
  }

  updateProduct(id: number, updatedProduct: Product): Observable<any> {
    return this.http.put<any>(`${APP_URL}/products/${id}`, updatedProduct);
  }

  getProductsById(productId: number): Observable<any> {
    return this.http.get<any>(`${APP_URL}/products/${productId}`);
  }


  loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];
    this.cartSubject.next(cart); 
  }


  private updateLocalStorage(cart: any[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);

  }
removeFromCart(product: any): void {
  const cart = this.cartSubject.value.filter(item => item.productId !== product.productId);
  this.updateLocalStorage(cart);
}

addToCart(product: any): void {
  const cart = this.cartSubject.value;
  const index = cart.findIndex(item => item.productId === product.productId);
  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  this.updateLocalStorage(cart);
}
refreshCart(cart: any[]): void {
  this.cartSubject.next(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
}

}
