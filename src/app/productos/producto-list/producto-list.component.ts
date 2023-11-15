import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product-service.service';
import { IProduct } from './../i-product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss'],
})
export class ProductoListComponent implements OnInit {
  productos: IProduct[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.findAll().subscribe((data) => {
      this.productos = data;
      console.log(data);
    });
  }

  handleButtonClick(product: IProduct): void {
    this.router.navigate(['/productos', product.id]);
  }

  editButtonClick(product: IProduct): void {
    this.router.navigate(['/productos/edit', product.id]);
  }
}