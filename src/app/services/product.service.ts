import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Product } from '../models/Product'
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {
      id: 1,
      img: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/29/47240405/47240405_f28b57a8-c3c2-4366-b7a9-40f88f41b895_2048_2048.webp',
      name: 'Bubble Wrap',
      price: 2000,
      address: 'Kota Tangerang Selatan',
      rate: '5 / 562',
      stock: 12
    }, // 1
    {
      id: 2,
      img: 'https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/6/20/387b6891-65cd-407a-ab4b-7c6bf063f716.jpg.webp',
      name: 'J04 Webcam Stand 4 Lampu LED',
      price: 138000,
      address: 'Jakarta Utara',
      rate: '4 / 35',
      stock: 12
    }, // 2
    {
      id: 3,
      img: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/6/30/19187018/19187018_6f48f3ff-f0e2-47e8-9f97-8520c5c33b6d_700_700.webp',
      name: 'A3 Webcam 480p with mic HD Camera',
      price: 168000,
      address: 'Jakarta Utara',
      rate: '4 / 22',
      stock: 12
    }, // 3
    {
      id: 4,
      img: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2016/3/26/6837668/6837668_d2122620-80b3-4852-b2e5-994adee11c92.png.webp',
      name: 'PS3 Eye USB Camera (Compatible for PC)',
      price: 175000,
      address: 'Jakarta Pusat',
      rate: '5 / 86',
      stock: 12
    }, // 4
    {
      id: 5,
      img: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/11/1/382551/382551_5674899b-0643-4e73-b71e-96fb9008b6b5_1080_1080.webp',
      name: '[KHUSUS GOJEK / GRAB] Bubble Wrap 50m',
      price: 37000,
      address: 'Jakarta Barat',
      rate: '5 / 869',
      stock: 12
    } // 5
  ]
  product

  constructor(private http:HttpClient) { }

  getProducts(): Product[] {
    return this.products
  }

  getProduct(id): Product {
    this.products.filter(el => {
      if (el.id == id) {
        this.product = el
      }
    })
    return this.product
  }
}
