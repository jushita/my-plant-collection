import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';
import { Store, select } from '@ngrx/store';
import { removePlant } from '../plant.actions'
import * as fromPlants from '../plant.reducer';

@Component({
  selector: 'plants-view',
  templateUrl: './plants-view.component.html',
  styleUrls: ['./plants-view.component.css']
})
export class PlantsViewComponent implements OnInit {

  plants: Plant[];

  constructor(private store: Store<fromPlants.State> ) { 
  }

  ngOnInit(): void {
    this.store.select(fromPlants.selectPlants).subscribe(plants => this.plants = plants)
  }

  removePlant(plant: Plant) {
    this.store.dispatch(removePlant({plant}));
  }

}
