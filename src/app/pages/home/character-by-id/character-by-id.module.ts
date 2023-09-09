import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterByIdRoutingModule } from './character-by-id-routing.module';
import { CharacterByIdComponent } from './character-by-id.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharacterByIdComponent
  ],
  imports: [
    CommonModule,
    CharacterByIdRoutingModule,
    SharedModule
  ]
})
export class CharacterByIdModule { }
