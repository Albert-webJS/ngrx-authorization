import { provideHttpClient } from "@angular/common/http";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, Routes } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { AppComponent } from "./app/app.component";
import { appReducers  } from "./app/store/reducers";


const routes: Routes = []


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducers),
  ],
}).catch(error => console.log(error));

