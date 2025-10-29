import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-userviewproduct',
  templateUrl: './userviewproduct.component.html',
  styleUrls: ['./userviewproduct.component.css']
})
export class UserviewproductComponent implements OnInit {

  selectedCategory: string = '';
  searchTerm: string = '';
  categories: string[] = [];
  filteredProducts: Product[] = [];

  // products: Product[] = [];
  products: Product[] = [
    {
      productId: 1,
      name: 'Wireless Headphones',
      description: 'High-quality Bluetooth headphones with noise cancellation.',
      price: 2999,
      stock: 50,
      category: 'Electronics',
      photoImage: 'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha',
      createdAt: new Date('2025-01-10'),
      updatedAt: new Date('2025-02-15'),
      user: { userId: 101, username: 'John Doe', email: 'john@example.com' }
    },
    {
      productId: 2,
      name: 'Smartphone',
      description: 'Latest Android smartphone with 128GB storage.',
      price: 19999,
      stock: 30,
      category: 'Mobiles',
      photoImage: 'https://m.media-amazon.com/images/I/714DutH6IBL._AC_UF894,1000_QL80_.jpg',
      createdAt: new Date('2025-01-20'),
      updatedAt: new Date('2025-02-18'),
      user: { userId: 102, username: 'Alice Smith', email: 'alice@example.com' }
    },
    {
      productId: 3,
      name: 'Gaming Laptop',
      description: 'Powerful laptop with RTX graphics for gaming enthusiasts.',
      price: 79999,
      stock: 10,
      category: 'Computers',
      photoImage: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/ac16251/media-gallery/laptop-alienware-ac16251-blue-lf-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=925&qlt=100,1&resMode=sharp2&size=925,804&chrss=full',
      createdAt: new Date('2025-01-25'),
      updatedAt: new Date('2025-02-20'),
      user: { userId: 103, username: 'Bob Johnson', email: 'bob@example.com' }
    }
  ];
  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.loadProducts();
    this.categories = [...new Set(this.products.map(p => p.category))];
    this.filteredProducts = this.products;
  }
  
  applyFilters(): void {
    this.filteredProducts = this.products.filter(product =>
      (this.selectedCategory ? product.category === this.selectedCategory : true) &&
      (this.searchTerm ? product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true)
    );
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products', err)
    });
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }

  filterProducts(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
    }
  }
  
}
