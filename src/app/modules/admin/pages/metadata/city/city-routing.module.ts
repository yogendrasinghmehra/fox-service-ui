import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityAddComponent } from './city-add/city-add.component';
import { CityEditComponent } from './city-edit/city-edit.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  {
    path:'',
    component:CityListComponent
  },
  {
    path:'add',
    component:CityAddComponent
  },
  {
    path:':id/edit',
    component:CityEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
