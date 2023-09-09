import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SmallCardModule } from './small-card/small-card.module';
import { SmallCardComponent } from './small-card/small-card.component';
import { ModalDetailModule } from './modal-detail/modal-detail.module';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { OrderByModule } from './order-by/order-by.module';
import { OrderByComponent } from './order-by/order-by.component';
import { SmallCardLocationModule } from './small-card-location/small-card-location.module';
import { SmallCardEpisodiesModule } from './small-card-episodies/small-card-episodies.module';
import { SmallCardEpisodiesComponent } from './small-card-episodies/small-card-episodies.component';
import { SmallCardLocationComponent } from './small-card-location/small-card-location.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SmallCardModule,
    ModalDetailModule,
    OrderByModule,
    SmallCardLocationModule,
    SmallCardEpisodiesModule
  ],
  exports:[
    SmallCardComponent,
    ModalDetailComponent,
    OrderByComponent,
    SmallCardLocationComponent,
    SmallCardEpisodiesComponent
  ]
})
export class SharedModule { }
