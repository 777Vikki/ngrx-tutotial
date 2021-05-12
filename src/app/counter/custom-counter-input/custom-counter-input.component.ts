import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onChangeChannel(): void {
    this.store.dispatch(changeChannelName());
  }

  onAdd(): void {
    if (!isNaN(this.value)) {
      this.store.dispatch(customIncrement({ value: +this.value }));
    }
  }

}
