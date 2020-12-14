import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StoreSummary } from './store-summary';

@Injectable({
  providedIn: 'root'
})
export class StoreSummaryService {

  getStoreSummary(): Observable<StoreSummary[]> {
    return of([
      { title: "12", value: "Australia", isIncrease: true, bpcolor: "success", percentValue: ".7", icon: "sentiment_very_satisfied", isCurrency: false, tpcolor:"success", color:"primary",  tppercentValue: ".5"},
      { title: "23", value: "USA", isIncrease: true, bpcolor: "info", percentValue: "0.8", icon: "sentiment_satisfied", isCurrency: false , tpcolor:"info", color:"accent",  tppercentValue: ".2"},
      { title: "34", value: "Europe", isIncrease: false, bpcolor: "danger", percentValue: "0.25", icon: "sentiment_very_dissatisfied", isCurrency: false , tpcolor:"info", color:"warn",  tppercentValue: "0"},
      { title: "45", value: "HongKong", isIncrease: true, bpcolor: "success", percentValue: "1", icon: "sentiment_very_satisfied", isCurrency: false , tpcolor:"success", color:"primary",  tppercentValue: "1"}
    ]);
  }

  constructor() { }
}