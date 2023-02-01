import { routerReducer } from "@ngrx/router-store"
import { ActionReducerMap } from "@ngrx/store"
import { IAppState } from "../state"
import { configReducers } from "./config.reducers"
import { usersReducers } from "./user.reducers"

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: usersReducers,
    config: configReducers
}