import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IntDataSource, IntItem } from './int-datasource';

@Component({
  selector: 'app-int',
  templateUrl: './int.component.html',
  styleUrls: ['./int.component.css']
})
export class IntComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<IntItem>;
  dataSource: IntDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [    "id",
  "name",
  "paymentMode",
  "date",
  "status",
  "orderTotal",
  "srmStatus", "srmStatus1"];

  ngOnInit() {
    this.dataSource = new IntDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
