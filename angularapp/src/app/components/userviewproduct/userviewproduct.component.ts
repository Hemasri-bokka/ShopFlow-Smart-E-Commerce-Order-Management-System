import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userviewproduct',
  templateUrl: './userviewproduct.component.html',
  styleUrls: ['./userviewproduct.component.css']
})
export class UserviewproductComponent implements OnInit {

  constructor(private productService: ProductService) { }


  
    selectedCategory: string = '';
    searchTerm: string = '';
    categories: string[] = [];
    filteredProducts: Product[] = [];
    products: Product[] = [];
  
    ngOnInit(): void {
      this.loadProducts();
    }
  
    loadProducts(): void {
      
      this.productService.getProducts().subscribe({
        next: (data) => {
          this.products = data;
          this.categories = [...new Set(this.products.map(p => p.category))];
          this.filteredProducts = this.products;
        },
        error: (err) => console.error('Error fetching products', err)
      });
    }
  
    applyFilters(): void {
      this.filteredProducts = this.products.filter(product =>
        (this.selectedCategory ? product.category === this.selectedCategory : true) &&
        (this.searchTerm ? product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true)
      );
    }
  
    addToCart(product: Product): void {
      this.productService.addToCart(product);
      alert(`${product.name} added to cart!`);
    }


    
  }

