import { NgModule } from '@angular/core';
import { NavbarChangeDirective } from './navbar-change.directive';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent, NavbarChangeDirective],
  exports: [NavbarComponent, NavbarChangeDirective],
})
export class NavbarModule {}
