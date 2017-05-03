import {Component, EventEmitter, Injectable, OnDestroy, OnInit, Output} from '@angular/core';
import {CatalogService} from "../catalog.service";
import {Observable} from "rxjs/Observable";
import {Book} from "../book.model";
import {OrderRow} from "../order-row.model";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})


@Injectable()
export class OrderCatalogFormComponent implements OnInit, OnDestroy {
  books: Book[];
  subscription: Subscription;
  @Output() add = new EventEmitter<OrderRow>();

  data: {
    book: Book
    quantity: number
  };

  constructor(private catalog: CatalogService) {

  }

  ngOnInit() {
      this.reset();
      this.subscription = this.catalog.getList()
        .subscribe(books => this.books = books);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
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
