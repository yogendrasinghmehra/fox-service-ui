import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, AgGridModule, HttpClientModule],
  exports: [DataTableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DataTableModule {}
