import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IProduct } from './i-product'; 

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_BASE_URL = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  findAll(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.API_BASE_URL)
      .pipe(tap((data) => console.log(data)));
  }

  findById(id: number): Observable<IProduct> {
    return this.http
      .get<IProduct>(`${this.API_BASE_URL}/${id}`)
      .pipe(tap((data) => console.log(data)));
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http
      .post<IProduct>(this.API_BASE_URL, product)
      .pipe(tap((data) => console.log(data)));
  }

  update(id: number, product: IProduct): Observable<IProduct> {
    return this.http
      .put<IProduct>(`${this.API_BASE_URL}/${id}`, product)
      .pipe(tap((data) => console.log(data)));
  }
}