import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.rowData = this.http.get<any[]>(
    //   'https://www.ag-grid.com/example-assets/small-row-data.json'
    // );
  }
}
