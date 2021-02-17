import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalPageComponent } from './animal-page/animal-page.component';
import { DogPageComponent } from './dog-page/dog-page.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { HorsePageComponent } from './horse-page/horse-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: AnimalPageComponent
  },
  {
    path: 'dog',
    component: DogPageComponent
  },
  {
    path: 'cat',
    component: CatPageComponent
  },
  {
    path: 'horse',
    component: HorsePageComponent
  },

  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }