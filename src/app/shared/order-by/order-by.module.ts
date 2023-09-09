import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderByRoutingModule } from './order-by-routing.module';
import { OrderByComponent } from './order-by.component';


@NgModule({
  declarations: [
    OrderByComponent
  ],
  imports: [
    CommonModule,
    OrderByRoutingModule
  ],
  exports:[OrderByComponent]
})
export class OrderByModule { }
