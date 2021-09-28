import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/modules/core/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
