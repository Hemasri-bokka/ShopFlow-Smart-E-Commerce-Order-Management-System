import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';

const routes: Routes = [
  { path: 'add-product', component: AdminaddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
