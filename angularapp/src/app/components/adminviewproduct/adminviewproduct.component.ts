import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminviewproduct',
  templateUrl: './adminviewproduct.component.html',
  styleUrls: ['./adminviewproduct.component.css']
})
export class AdminviewproductComponent implements OnInit {

  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = ['All', 'Electronics', 'Clothing', 'Grocery'];
  selectedCategory = 'All';

  constructor(private ser: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts() {
    this.ser.getProducts().subscribe((data) => {this.products = data, this.filteredProducts =  data});
  }


  filterProducts() {
    if (this.selectedCategory === 'All') {
      this.loadProducts();
    } else {
      this.filteredProducts = this.products.filter(p => p.category === this.selectedCategory);
    }
  }


  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.ser.deleteProduct(id).subscribe(() => {
        alert('Product deleted successfully!');
        this.loadProducts();
      });
    }
  }

  
editProduct(productId: number) {
  this.router.navigate(['admin/add-product', productId]);
}

}
