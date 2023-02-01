import { createSelector } from "@ngrx/store";
import { IAppState, IUserState } from "../state";


const selectUser = (state: IAppState) => state.users;

export const selectUserList = createSelector(
    selectUser,
    (state: IUserState) => state.users
)

export const selectSelectedUser = createSelector(
    selectUser,
    (state: IUserState) => state.selectedUser
)