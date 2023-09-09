import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:'character',
    component: HomeComponent,
    loadChildren:()=>import('../home/character/character.module').then( m=> m.CharacterModule)
  },
  {
    path:'character/:id',
    component: HomeComponent,
    loadChildren:()=>import('../home/character-by-id/character-by-id.module').then( m=> m.CharacterByIdModule)
  },
  {
    path:'location',
    component: HomeComponent,
    loadChildren:()=>import('../home/location/location.module').then( m=> m.LocationModule)
  },
  {
    path:'episode',
    component: HomeComponent,
    loadChildren:()=>import('../home/episode/episode.module').then( m=> m.EpisodeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
