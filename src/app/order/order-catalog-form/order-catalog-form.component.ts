import {Component, Injectable, OnInit} from '@angular/core';
import {CatalogService} from "../catalog.service";

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})


@Injectable()
export class OrderCatalogFormComponent implements OnInit {
  books = this.catalog.getList();

  constructor(private catalog: CatalogService) {

  }

  ngOnInit() {
  }
}
