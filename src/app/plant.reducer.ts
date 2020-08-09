import { ActionEx, PlantActionTypes } from './plant.actions';

export const initialState = [];

export function PlantReducer(state = initialState, action: ActionEx) {
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