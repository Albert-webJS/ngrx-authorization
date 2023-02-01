import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store, StoreModule } from '@ngrx/store';
import { GetConfig } from './store/actions';
import { selectConfig } from './store/selectors';
import { IAppState } from './store/state';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule]
})

export class AppComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }
  public config$ = this._store.pipe(select(selectConfig))

  ngOnInit(): void {
    this._store.dispatch(new GetConfig())
    console.log("store: ", this._store);
  }
}
