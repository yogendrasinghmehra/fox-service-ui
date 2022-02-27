import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityRoutingModule } from './city-routing.module';
import { CityAddComponent } from './city-add/city-add.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityService } from 'src/app/modules/core/services/admin/city.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CityAddComponent,
    CityEditComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CityService]

})
export class CityModule { }
