import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { IConfig } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(`${env.domain}/config.json`);
  }
}
