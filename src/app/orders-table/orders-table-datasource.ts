import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface OrdersTableItem {
  id: string;
    date: string;
    name: string;
    status: string;
    orderTotal: string;
    paymentMode: string;
    srmStatus: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: OrdersTableItem[] = [
  {"id": "VETH" ,"date": "14-Oct-2020","name": "B1234RT4","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VMIN","date": "14-Oct-2020","name": "B22WW331","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VBND","date": "14-Oct-2020","name": "B33EE44R","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VEQ","date": "14-Oct-2020","name": "B23456YU5","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VGE","date": "14-Oct-2020","name": "BTHY6543","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VAS","date": "15-Oct-2020","name": "B65TGBF4","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VGAD","date": "15-Oct-2020","name": "B5675RFH","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VAP","date": "15-Oct-2020","name": "B3434UYU","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VSO","date": "15-Oct-2020","name": "B45RTFG6","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VLC","date": "15-Oct-2020","name": "BER89IKHT","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VEQ","date": "14-Oct-2020","name": "B23456YU5","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VGE","date": "14-Oct-2020","name": "BTHY6543","status": "Complete","orderTotal": "Complete","paymentMode": "Fixed Income ", srmStatus:"Complete"},
  {"id": "VAS","date": "15-Oct-2020","name": "B65TGBF4","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"},
  {"id": "VGAD","date": "15-Oct-2020","name": "B5675RFH","status": "Complete","orderTotal": "Complete","paymentMode": "Equity ", srmStatus:"Complete"}
];

/**
 * Data source for the OrdersTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class OrdersTableDataSource extends DataSource<OrdersTableItem> {
  data: OrdersTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<OrdersTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OrdersTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: OrdersTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
