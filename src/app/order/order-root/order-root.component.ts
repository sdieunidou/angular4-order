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

  public remove = function(row) {
    this.rows = this.rows.filter((item) => {
      return item !== row;
    })
  }
}
