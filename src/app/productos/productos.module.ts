import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';

@NgModule({
  declarations: [
    ProductoDetailComponent,
    ProductoEditComponent,
    ProductoListComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ProductoListComponent],
})
export class ProductosModule {}