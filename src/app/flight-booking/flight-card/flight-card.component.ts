import { Component, OnInit, EventEmitter, Input, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {

    setTimeout(() => this.selectedChange.next(true), 0);

    console.debug('ngOnInit', this.selected, this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['selected']) {
      console.debug('selected changed!')
    }

    if (changes['item']) {
      console.debug('item changed!')
    }

    console.debug('ngOnChanges', this.selected, this.item);
  }

  ngOnDestroy(): void {
    
    console.debug('ngOnDestory', this.selected, this.item);

  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

}
