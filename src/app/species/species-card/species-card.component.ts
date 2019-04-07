import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Species} from '../species';

@Component({
  selector: 'fl-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesCardComponent {

  @Input() species?: Species;

  constructor() { }

}