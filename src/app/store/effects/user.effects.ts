import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, of, switchMap, withLatestFrom } from "rxjs";
import { IUserHttp } from "src/app/models/http-models/user-http.intarface";
import { UserService } from "src/app/services/user.service";
import { EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess } from "../actions";
import { selectUserList } from "../selectors";
import { IAppState } from "../state";




@Injectable()
export class UserEffects {

    constructor(
        private _userSerivice: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

    getUser$ = createEffect(() => this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users?.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser!));
        })
    ))

    getUsers$ = createEffect(() => this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userSerivice.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    ))
}