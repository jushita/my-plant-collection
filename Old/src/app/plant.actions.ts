import { Action , createAction, props} from '@ngrx/store';
import { Plant } from './models/plant';

export enum PlantActionTypes {
    Add = '[Plant Component] Add',
    Remove = '[Plant Component] Remove',
    Update = '[Plant Component] Update',
    Retrieve = '[Plant Component] Retrieve'  // [state] action
}

export const addPlant = createAction(
    PlantActionTypes.Add,
    props<{plant: Plant}>()
)

export const removePlant = createAction(
    PlantActionTypes.Remove,
    props<{plant: Plant}>()
)

