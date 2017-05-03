import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OrderRow} from "../order-row.model";

@Component({
  selector: 'app-order-manual-form',
  templateUrl: './order-manual-form.component.html',
  styleUrls: ['./order-manual-form.component.css']
})
export class OrderManualFormComponent implements OnInit {
  @Output() add = new EventEmitter<OrderRow>();

  data: OrderRow;

  ngOnInit() {
  }

  constructor() {
    this.reset();
  }

  submit(row: OrderRow) {
    this.add.emit(row);
    this.reset();
  }

  reset() {
    this.data = new OrderRow();
  }
}
