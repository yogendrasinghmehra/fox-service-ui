import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../shared/icons/icons.module';
import { NavbarChangeDirective } from './navbar-change.directive';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent, NavbarChangeDirective],
  imports: [RouterModule,IconsModule],
  exports: [NavbarComponent, NavbarChangeDirective],
})
export class NavbarModule {}
