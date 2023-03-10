import { Action } from "@ngrx/store";
import { IUser } from "src/app/models";


export enum EUserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User!',
    GetUserSuccess = "[User] Get User Succes!",
}


export class GetUsers implements Action {
    public readonly type = EUserActions.GetUser;
}

export class GetUsersSuccess implements Action {
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]) { }
}

export class GetUser implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload: number) { }
}

export class GetUserSuccess implements Action {
    public readonly type = EUserActions.GetUserSuccess;
    constructor(public payload: IUser) { }
}


export type UserAcions = GetUser | GetUserSuccess | GetUsers | GetUsersSuccess