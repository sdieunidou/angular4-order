import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

import { OrderRow } from "../order-row.model";

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit {

  rows = [
    new OrderRow("La Nuit des temps", "René Barjavel", 7.43, 3),
    new OrderRow("Des fleurs pour Algernon", "Daniel Keyes", 6.00, 5),
  ];

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
      .map(row => row.ht())
      .reduce((total, value) => total + value, 0);
  }

  totalTtc() {
    return this.rows
      .map(row => row.ttc())
      .reduce((total, value) => total + value, 0);
  }
}
