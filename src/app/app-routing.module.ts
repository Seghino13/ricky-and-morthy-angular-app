import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'resources/character',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    loadChildren: ()=>import('./pages/home/home.module').then( m=> m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
