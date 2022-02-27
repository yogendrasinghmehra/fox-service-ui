import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  //#region Local Variable
  searchFromGroup:FormGroup;
  
  //#endregion
  constructor(private router:Router) {}

  ngOnInit(): void {
    this.createSearchFromGroup();
  }

  createSearchFromGroup()
  {
    this.searchFromGroup = new FormGroup({
      city:new FormControl('',Validators.required),
      vichleType:new FormControl('',Validators.required),
      vichleManufacturers:new FormControl('',Validators.required),
      modalNumber:new FormControl('',Validators.required)
    })
  }
  onBookClick()
  { 
    if(this.searchFromGroup.invalid)
    {
      return;
    }
    const formParams = this.searchFromGroup.value;
    this.router.navigate(['/services', formParams.city, formParams.vichleType, formParams.vichleManufacturers, formParams.modalNumber]);
  }
}
