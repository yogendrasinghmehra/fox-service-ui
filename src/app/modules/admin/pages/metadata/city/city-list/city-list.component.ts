import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/modules/core/modals/admin/city.modals';
import { CityService } from 'src/app/modules/core/services/admin/city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  cityList:City[] = [];

  constructor(private cityService:CityService) { }
  ngOnInit(): void {
    this.getCitysList();
  }

  getCitysList()
  {
    this.cityService.getAll().subscribe((response:City[])=>{
      this.cityList = response;
      console.log(this.cityList); 
    })
  }

}
