import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallCardRoutingModule } from './small-card-routing.module';
import { SmallCardComponent } from './small-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedModule } from '../shared.module';
import { OrderByModule } from '../order-by/order-by.module';



@NgModule({
  declarations: [
    SmallCardComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    SmallCardRoutingModule,
    OrderByModule
  ],
  exports: [SmallCardComponent]
})
export class SmallCardModule { }
