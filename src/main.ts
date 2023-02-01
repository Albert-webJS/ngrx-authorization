import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideRouterStore } from "@ngrx/router-store";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools  } from "@ngrx/store-devtools";
import { AppComponent } from "./app/app.component";
import { ConfigEffects } from "./app/store/effects/config.effects";
import { UserEffects } from "./app/store/effects/user.effects";
import { appReducers } from "./app/store/reducers";


const routes: Routes = []


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducers),
    provideRouterStore(),
    provideEffects([ConfigEffects, UserEffects]),
    provideStoreDevtools(),
  ],
}).catch(error => console.log(error));

