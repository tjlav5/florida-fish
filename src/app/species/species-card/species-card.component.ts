import { HostListener, Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Species} from '../species';

@Component({
  selector: 'fl-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesCardComponent {
  @Input() species?: Species;
  @Input() showBio = false;
}