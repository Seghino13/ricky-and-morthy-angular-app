import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmallCardEpisodiesRoutingModule } from './small-card-episodies-routing.module';
import { SmallCardEpisodiesComponent } from './small-card-episodies.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    SmallCardEpisodiesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    SmallCardEpisodiesRoutingModule
  ],
  exports:[SmallCardEpisodiesComponent]
})
export class SmallCardEpisodiesModule { }
