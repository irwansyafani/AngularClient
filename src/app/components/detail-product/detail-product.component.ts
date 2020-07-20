import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
  providers: [NgbRatingConfig]
})
export class DetailProductComponent implements OnInit {
  product

  constructor
    (private route: ActivatedRoute,
    private productService: ProductService,
    config: NgbRatingConfig) {
      config.max = 5;
      config.readonly = true
    }

  ngOnInit(): void {
    if (this.route && this.route.params) {
      this.route.params.subscribe(params => {
        this.product = this.productService.getProduct(params['id'])
      })
    }
  }

}
