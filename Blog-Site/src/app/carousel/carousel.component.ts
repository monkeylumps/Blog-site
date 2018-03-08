import { Component, OnInit } from '@angular/core';

import { Image } from '../Image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: Image = {
    id: 1,
    url: 'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg',
    title: 'The beach'
  };


  constructor() { }

  ngOnInit() {
  }

}
