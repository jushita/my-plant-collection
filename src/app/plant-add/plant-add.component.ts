import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';
import { Store, select } from '@ngrx/store';
import { PlantAdd } from '../plant.actions';
@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css']
})
export class PlantAddComponent implements OnInit {

  plants: Observable<Plant[]>

  constructor(private store: Store<{ plants: Plant[]}>) { 
    this.plants = store.pipe(select('plants'));
  }

  AddPlant(plantName: string) {
    const plant = new Plant();
    plant.name = plantName;

    this.store.dispatch(new PlantAdd(plant));

  }

  ngOnInit(): void {
  }

}
