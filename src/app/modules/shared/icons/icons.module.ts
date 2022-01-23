import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { 
  Camera,
  Heart,
  Github,
  ShoppingCart } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  ShoppingCart
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports:[FeatherModule]
})

export class IconsModule { }
