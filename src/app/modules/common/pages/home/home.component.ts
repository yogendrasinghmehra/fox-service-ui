import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/modules/core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    const metaTags = [
      { name: 'description', content: 'Home page NECA' },
      { name: 'author', content: 'yogendra' },
      { name: 'keywords', content: 'NECA, Ministry of Power' },
    ];
    this.seoService.setPageSEODetails(
      'Doorstep Bike Service Expert in Noida | Scooty bike Mechanic on call near your Sector Noida',
      metaTags
    );
  }
}
