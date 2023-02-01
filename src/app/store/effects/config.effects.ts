import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { IConfig } from "src/app/models";
import { ConfigService } from "src/app/services/config.service";
import { EConfigActions, GetConfig, GetConfigSuccess } from "../actions";


@Injectable()
export class ConfigEffects {
    constructor(
        private _configService: ConfigService,
        private _actions$: Actions
    ) { }

    getConfig$ = createEffect(() => this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfigSuccess),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    ))
}