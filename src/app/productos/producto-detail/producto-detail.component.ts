import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss'],
})
export class ProductoDetailComponent implements OnInit {
  product: IProduct | undefined;

  goToProducts() {
    this.router.navigate(['/productos']);
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.findById(productId).subscribe((data: IProduct) => {
      this.product = data;
    });
  }
}