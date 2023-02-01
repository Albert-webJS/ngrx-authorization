import { EUserActions, UserAcions } from "../actions";
import { initialUserState, IUserState } from "../state";


export const usersReducers = (
    state = initialUserState,
    action: UserAcions
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUserSuccess: {
            return {
                ...state,
                selectedUser: action.payload,
            }
        };
        case EUserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload,
            }
        };
        default:
            return state;
    }
}