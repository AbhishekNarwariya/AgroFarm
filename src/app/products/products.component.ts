import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService, Product } from './products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  pagedProducts: Product[] = [];
  page = 1;
  pageSize = 10;
  totalPages = 1;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      this.totalPages = Math.ceil(this.products.length / this.pageSize);
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.page = page;
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedProducts = this.products.slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.setPage(this.page + 1);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.setPage(this.page - 1);
    }
  }
}
