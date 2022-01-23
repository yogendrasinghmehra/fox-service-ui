import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box.component';

@NgModule({
  declarations: [SearchBoxComponent],
  imports:[FormsModule, ReactiveFormsModule],
  exports: [SearchBoxComponent],
})
export class SearchBoxModule {}
