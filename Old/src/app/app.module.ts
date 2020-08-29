import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { PlantsViewComponent } from './plants-view/plants-view.component';
import { PlantAddComponent } from './plant-add/plant-add.component';
import * as fromPlants from './plant.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PlantsViewComponent,
    PlantAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ [fromPlants.featureKey]: fromPlants.reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
