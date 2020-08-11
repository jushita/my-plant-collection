import { PlantActionTypes, addPlant, removePlant } from './plant.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Plant } from './models/plant';

export interface State {
    plants: Plant[];
}
export const initialState: State = {
    plants: []
};

export const reducer = createReducer(
    initialState,
    on(addPlant, (state, {plant}) => {
        const plants = [...state.plants, plant];
        return {...state, plants};
    }),
    on(removePlant, (state, {plant}) => {
        let plants = [...state.plants];
        const index = plants.findIndex((p) => {
            return p.id === plant.id;
        });
        plants = plants.splice(index, 1);
        return {...state, plants};
    })
)
