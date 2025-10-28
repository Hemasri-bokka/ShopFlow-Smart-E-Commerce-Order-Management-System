import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  AdminAddForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.createControls();
   }

   createControls(){
      this.AdminAddForm = this.fb.group({
        
      })
   }

  ngOnInit(): void {

  }

}
