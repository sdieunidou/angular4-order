import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import {FormsModule} from "@angular/forms";
import { OrderRowsComponent } from './order-rows/order-rows.component';
import { OrderManualFormComponent } from './order-manual-form/order-manual-form.component';
import { OrderCatalogFormComponent } from './order-catalog-form/order-catalog-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OrderRootComponent,
    OrderRowsComponent,
    OrderManualFormComponent,
    OrderCatalogFormComponent
  ],
  exports: [
    OrderRootComponent
  ]
})
export class OrderModule { }
