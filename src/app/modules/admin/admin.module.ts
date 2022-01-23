import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminHeaderService } from '../core/services/admin/admin-header.service';
import { DashboardService } from '../core/services/admin/dashboard.service';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers:[
     AdminHeaderService,
     DashboardService
  ]
})
export class AdminModule { }
