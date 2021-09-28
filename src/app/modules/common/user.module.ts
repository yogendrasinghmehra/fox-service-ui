import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { CommonComponent } from './common.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [CommonComponent, FooterComponent],
  imports: [CommonModule, CommonRoutingModule, HeaderModule, NavbarModule],
})
export class UserModule {}
