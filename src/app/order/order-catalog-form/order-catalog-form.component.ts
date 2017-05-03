import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {CatalogService} from "../catalog.service";
import {Observable} from "rxjs/Observable";
import {Book} from "../book.model";
import {OrderRow} from "../order-row.model";

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})


@Injectable()
export class OrderCatalogFormComponent implements OnInit {
  books: Observable<Book[]>;

  @Output() add = new EventEmitter<OrderRow>();

  data: {
    book: Book
    quantity: number
  };

  constructor(private catalog: CatalogService) {

  }

  ngOnInit() {
      this.reset();
      this.books = this.catalog.getList();
  }

  reset() {
      this.data = {
        book: <Book>{},
        quantity: 1
      }
  }

  submit(data) {
    this.add.emit(new OrderRow(data.book.title, data.book.author, data.book.price, data.quantity));
    this.reset();
  }
}
