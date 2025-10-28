import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCart();
   }

  apiUrl: string = 'http://localhost:8080';

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  getProductsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?category=${category}`);
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getProductsByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, updatedProduct: Product): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedProduct);
  }

  getProductsById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
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
    const cart = this.cartSubject.value.filter(item => item.id !== product.id);
    this.updateLocalStorage(cart);
  }


  addToCart(product: any): void {
    const cart = this.cartSubject.value;
    const index = cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      cart[index].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.updateLocalStorage(cart);
  }

}
