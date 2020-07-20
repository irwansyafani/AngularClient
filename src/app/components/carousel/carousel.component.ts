import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/6/24/6297436e-752e-4237-992e-2f61dc5db085.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/10/b7de690a-bb49-48f0-a67a-d17b3cc1f849.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/9/6551fea8-b40a-4128-a9db-e38125bd9c0c.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/8/5053aca1-c55d-4428-ae9c-b9fafc98af9d.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/9/bfbb3a81-2fa4-4709-bf89-0948a8eceab3.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/9/bb1147fd-387e-46f4-957e-bda7a656fa3e.jpg',
    'https://ecs7-p.tokopedia.net/img/NsjrJu/2020/7/9/b5c349b3-16bb-4bda-aa0f-b5c44c71eccd.jpg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  board() {
    return {
      'display': 'flex',
      'justify-content': 'center',
      'margin-top': '50px',
      'margin-bottom': '100px'
    }
  }

  image() {
    return {
      'border-radius': '25px'
    }
  }
}
