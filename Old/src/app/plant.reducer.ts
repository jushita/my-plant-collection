import { addPlant, removePlant } from './plant.actions';
import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Plant } from './models/plant';

export const featureKey = 'plants';

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
            return p.name === plant.name;
        });
        plants.splice(index, 1);
        return {...state, plants};
    })
)


export const selectPlantState = createFeatureSelector(
    featureKey
) 

export const selectPlants = createSelector(
    selectPlantState,
    (state: State) => state.plants 
)