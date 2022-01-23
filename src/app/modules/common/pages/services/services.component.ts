import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  cityId:string|null;
  vehicleType:string|null;
  vehicleManufacturers:string|null;
  modalNumber:string|null;

  constructor(private actRoute:ActivatedRoute) { 

    const urlParams= this.actRoute.snapshot.paramMap;
    this.cityId= urlParams.get('city');
    this.vehicleType= urlParams.get('type');
    this.vehicleManufacturers= urlParams.get('manufacturer');
    this.modalNumber= urlParams.get('model-number');
  }

  ngOnInit(): void {
    
    console.log(this.cityId , this.vehicleType, this.vehicleManufacturers, this.modalNumber);
    }

}
