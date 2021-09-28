import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  slides = [
    {
      imageUrl: 'assets/img/banner-1.jpg',
      imageAltText: 'first slide',
      headingText: 'Your Doorstep Bike Service Expert',
      subHeadingText:
        'Get instant access to reliable and affordable services at your door step.',
    },
    {
      imageUrl: 'assets/img/banner-2.jpg',
      imageAltText: 'second slide',
      headingText: 'Convenient and hassle-free appointments',
      subHeadingText: '24 X 7 Convenient Online Booking',
    },
    {
      imageUrl: 'assets/img/banner-3.png',
      imageAltText: 'third slide',
      headingText: 'Pick-up & Drop Facility',
      subHeadingText:
        'Your convenience is our motto, we will pick your bike and deliver at your doorstep, spend that extra time with your loved ones.',
    },
  ];

  ngOnInit(): void {}
}
