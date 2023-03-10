import { Action } from "@ngrx/store";
import { IConfig } from "src/app/models";

export enum EConfigActions {
    GetConfig = "[Config] Get config !",
    GetConfigSuccess = "[Config] Get config Success !",
}


export class GetConfig implements Action {
    public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccess implements Action {
    public readonly type = EConfigActions.GetConfigSuccess;
    constructor(public payload: IConfig) { }
}

export type ConfigActions = GetConfig | GetConfigSuccess;