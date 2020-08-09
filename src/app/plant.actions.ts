import { Action } from '@ngrx/store';

export enum PlantActionTypes {
    Add = '[Plant Component] Add',
    Remove = '[Plant Component] Remove'
}


export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class PlantAdd implements ActionEx {
    readonly type = PlantActionTypes.Add;
    constructor(public payload: any) {

    }
}

export class CustomerRemove implements ActionEx {
    readonly type = PlantActionTypes.Remove;

    constructor(public payload: any) {

    }
}