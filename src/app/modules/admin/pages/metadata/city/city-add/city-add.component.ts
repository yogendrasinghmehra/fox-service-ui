import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/alert-message/alert-message.service';
import {CityService} from 'src/app/modules/core/services/admin/city.service';
import { City } from 'src/app/modules/core/modals/admin/city.modals';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss']
})
export class CityAddComponent implements OnInit {
  addCityFormGroup:FormGroup;
  submitted= false;
  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertMessageService,    
    private cityService:CityService) { }

  ngOnInit(): void {
    this.createFromFields();
  }

 
  createFromFields()
  {
    this.addCityFormGroup= this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      status:new FormControl(false,[Validators.required])

    });
  }
  get control(): { [key: string]: AbstractControl } {
    return this.addCityFormGroup.controls;
  }


  onFormSubmit()
  {
    this.submitted = true;
    if(this.addCityFormGroup.invalid) return;

    const postParams:City = this.addCityFormGroup.value;
    console.log(postParams);
    this.cityService.addCity(postParams).subscribe(successResponse=>{
console.log(successResponse)
    },
    errorResponse=>{
      console.log(errorResponse)
    });
  }

}
