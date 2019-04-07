import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fl-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesListComponent {

  constructor() { }
}