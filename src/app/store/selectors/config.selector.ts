import { createSelector } from "@ngrx/store";
import { IAppState, IConfigState } from "../state";



const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
)