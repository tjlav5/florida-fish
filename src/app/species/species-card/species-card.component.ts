import { HostListener, Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Species} from '../species';

export enum Side {
  PIC,
  BIO,
};

@Component({
  selector: 'fl-species-card',
  templateUrl: './species-card.component.html',
  styleUrls: ['./species-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesCardComponent {
  Side = Side;

  @Input() species?: Species;

  side = Side.PIC;

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    if (this.side === Side.PIC) {
      this.side = Side.BIO;
    } else if (this.side === Side.BIO) {
      this.side = Side.PIC;
    }
  }
}