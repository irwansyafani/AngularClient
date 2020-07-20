import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/Product'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [NgbRatingConfig]
})
export class CardComponent implements OnInit {
  products: Product[]

  constructor(private productService: ProductService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
