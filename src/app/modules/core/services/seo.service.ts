import { Injectable } from '@angular/core';
import { Title,Meta, MetaDefinition } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
     private TitleService:Title,
     private metaService:Meta) { }

  setPageSEODetails(title:string, metaDefinitions:MetaDefinition[])
  {
    this.TitleService.setTitle(title);

    this.metaService.addTags(metaDefinitions);

  }
}
