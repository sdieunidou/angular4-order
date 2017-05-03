import {Component, Inject, Input, LOCALE_ID, OnInit} from '@angular/core';

import { OrderRow } from "../order-row.model";
import {ReduceUtil} from "../../reduce.util";

@Component({
  selector: 'app-order-rows',
  templateUrl: './order-rows.component.html',
  styleUrls: ['./order-rows.component.css']
})
export class OrderRowsComponent implements OnInit {

  @Input() rows: OrderRow[];

  constructor(@Inject(LOCALE_ID) locale: string) {
    console.log(locale);
  }

  ngOnInit() {
  }

  remove(row: OrderRow) {
    this.rows = this.rows.filter(r => r !== row);
  }

  totalHt() {
    return this.rows
      .filter(row => row.ht() >= 0)
      .map(row => row.ht())
      .reduce(ReduceUtil.total, 0);
  }

  totalTtc() {
    return this.rows
      .filter(row => row.ttc() >= 0)
      .map(row => row.ttc())
      .reduce(ReduceUtil.total, 0);
  }

  isBig(amount) {
    return amount >= 100;
  }
}
