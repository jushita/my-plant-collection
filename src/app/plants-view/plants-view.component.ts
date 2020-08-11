import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';
import { Store, select } from '@ngrx/store';
import { PlantRemove } from '../plant.actions'

@Component({
  selector: 'plants-view',
  templateUrl: './plants-view.component.html',
  styleUrls: ['./plants-view.component.css']
})
export class PlantsViewComponent implements OnInit {

  plants: Observable<Plant[]>;

  constructor(private store: Store<{ plants: Plant[]}> ) { 
    this.plants = store.pipe(select('plants'));
  }

  ngOnInit(): void {
  }

  removePlant(plantIndex) {
    this.store.dispatch(new PlantRemove(plantIndex));
  }

}
