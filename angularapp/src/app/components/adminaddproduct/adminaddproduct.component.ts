import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  AdminAddForm : FormGroup;
  categories: string[] = ['Electronics', 'Groceries', 'Clothing', 'Books'];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.createControls();
   }

   createControls(){
      this.AdminAddForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      stock: [null, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      photoImage: [null] 
    });
    
   }



  ngOnInit(): void {

  }
  // Convert selected file to Base64 and patch into form
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.AdminAddForm.patchValue({ photoImage: base64String });
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.AdminAddForm.invalid) {
      return;
    }

    const product: Product = this.AdminAddForm.value; // Includes photo as Base64 string
    console.log(product);
    this.productService.addProduct(product).subscribe({
      next: (response) => {
        alert('Product added successfully!');
        this.AdminAddForm.reset();
      },
      error: (err) => {
        console.error('Error adding product', err);
        alert('Failed to add product.');
      }
    });
  }
}

