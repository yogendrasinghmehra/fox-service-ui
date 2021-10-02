import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarChangeDirective } from './navbar-change.directive';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent, NavbarChangeDirective],
  imports: [RouterModule],
  exports: [NavbarComponent, NavbarChangeDirective],
})
export class NavbarModule {}
