import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContainerWindowComponent } from './container-window/container-window.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { DogPageComponent } from './dog-page/dog-page.component';
import { HorsePageComponent } from './horse-page/horse-page.component';
import { AnimalPageComponent } from './animal-page/animal-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ContainerWindowComponent,
    PageContainerComponent,
    CatPageComponent,
    DogPageComponent,
    HorsePageComponent,
    AnimalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
