import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { withLatestFrom } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { EUserActions, GetUser } from "../actions";
import { IAppState } from "../state";




@Injectable()
export class UserEffects {

    constructor(
        private _userSerivice: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) { }

}