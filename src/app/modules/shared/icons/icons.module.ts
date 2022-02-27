import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { 
  Camera,
  Heart,
  Github,
  ShoppingCart,User,XCircle } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  ShoppingCart,
  User,
  XCircle
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
