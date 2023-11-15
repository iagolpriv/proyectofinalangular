import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.scss'],
})
export class ProductoEditComponent implements OnInit {
  productForm: FormGroup;
  productId: number | null = null;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productId = +id;
      this.productService
        .findById(this.productId)
        .subscribe((product: IProduct) => {
          this.productForm.patchValue(product);
        });
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: IProduct = this.productForm.value;
      if (this.productId) {
        this.productService
          .update(this.productId, product)
          .subscribe((data: IProduct) => {
            this.router.navigate(['/productos']);
          });
      } else {
        this.productService.create(product).subscribe((data: IProduct) => {
          this.router.navigate(['/productos']);
        });
      }
    }
  }
}