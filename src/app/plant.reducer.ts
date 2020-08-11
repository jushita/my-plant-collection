import { PlantActionTypes, PlantActions } from './plant.actions';
import { Action } from '@ngrx/store';

export const initialState = [];

export function PlantReducer(state = initialState, action: PlantActions) {
    switch (action.type) {
        case PlantActionTypes.Add:
            return [...state, action.payload];
        case PlantActionTypes.Remove:
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ];

        default:
            return state;
    }
}