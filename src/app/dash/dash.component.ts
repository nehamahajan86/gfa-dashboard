import { Component } from '@angular/core';
import { map, subscribeOn } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StoreSummaryService } from '../summary/store-summary.service'
import { StoreSummary } from '../summary/store-summary'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
         // chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
       // chart: { cols: 2, rows: 2 },
        table: { cols: 2, rows: 3 },
      };
    })
  );

  miniCardData: StoreSummary[];
  miniCard: StoreSummary;
  constructor(private breakpointObserver: BreakpointObserver, private summaryService: StoreSummaryService) {}
  aus: Boolean;
  usa: Boolean;
  europe: Boolean;
  hk: Boolean;
  onDisplayChange(changeDisplay){
    console.log('event captured ', changeDisplay);
    if(changeDisplay === "Australia") {
      this.aus=true;
      this.europe=false;
      this.hk = false;
      this.usa = false;
    } else if(changeDisplay === "HongKong") {
      this.aus=false;
      this.europe=false;
      this.hk = true;
      this.usa = false;
    }
    else if(changeDisplay === "USA") {
      this.aus=false;
      this.europe=false;
      this.hk = false;
      this.usa = true;
    }
    else if(changeDisplay === "Europe") {
      this.aus=false;
      this.europe=true;
      this.hk = false;
      this.usa = false;
    }
    
  }
 
  ngOnInit() {
    this.summaryService.getStoreSummary().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
    
  } 
}
