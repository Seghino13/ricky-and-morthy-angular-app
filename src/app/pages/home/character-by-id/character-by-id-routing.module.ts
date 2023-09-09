import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterByIdComponent } from './character-by-id.component';

const routes: Routes = [
  {
    path:'',
    component: CharacterByIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterByIdRoutingModule { }
