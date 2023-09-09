import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallCardLocationRoutingModule } from './small-card-location-routing.module';
import { SmallCardLocationComponent } from './small-card-location.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    SmallCardLocationComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SmallCardLocationRoutingModule
  ],
  exports:[SmallCardLocationComponent]
})
export class SmallCardLocationModule { }
