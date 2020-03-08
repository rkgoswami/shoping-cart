import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
  animations: [
    trigger('rotatedState', [
      state('ASC', style({ transform: 'rotate(0)' })),
      state('DESC', style({ transform: 'rotate(180deg)' })),
      transition('DESC => ASC', animate('400ms ease-out')),
      transition('ASC => DESC', animate('400ms ease-in'))
    ])
  ]
})
export class SearchBarComponent implements OnInit {

  debounceSearchText = new Subject<string>();
  sortingState = 'ASC';

  @Output() textChange = new EventEmitter();
  @Output() sortingOrder = new EventEmitter();

  // tslint:disable-next-line:variable-name
  private _searchText: string;

  public set searchText(data: string) {
    this._searchText = data;
    this.debounceSearchText.next(data);
  }

  public get searchText(): string {
    return this._searchText;
  }

  constructor() {}

  ngOnInit() {
    this.debounceSearchText.pipe(
      debounceTime(500),
      distinctUntilChanged()).subscribe(value => {
        this.textChange.emit(value);
      });
  }

  _sortList() {
    this.sortingState = (this.sortingState === 'ASC' ? 'DESC' : 'ASC');
    this.sortingOrder.emit(this.sortingState);
  }
}
