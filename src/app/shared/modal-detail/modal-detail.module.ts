import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDetailRoutingModule } from './modal-detail-routing.module';
import { ModalDetailComponent } from './modal-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ModalDetailComponent
  ],
  imports: [
    CommonModule,
    ModalDetailRoutingModule,
    NgbModule
  ],
  exports:[ModalDetailComponent]
})
export class ModalDetailModule { }
