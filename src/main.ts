import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { provideStore } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app/app.component";
import { ConfigEffects } from "./app/store/effects/config.effects";
import { UserEffects } from "./app/store/effects/user.effects";
import { appReducers } from "./app/store/reducers";


const routes: Routes = []


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducers),
    importProvidersFrom(
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot([ConfigEffects, UserEffects])
    )
  ],
}).catch(error => console.log(error));

