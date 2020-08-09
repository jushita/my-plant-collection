import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-plants-view',
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

}
