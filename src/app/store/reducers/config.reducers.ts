import { ConfigActions, EConfigActions } from "../actions";
import { IConfigState, initialConfigState } from "../state";

export const configReducers = (
    state = initialConfigState,
    action: ConfigActions
): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload,
            }
        };
        default:
            return state;
    }
}