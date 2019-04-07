import { Component, ChangeDetectionStrategy } from '@angular/core';
import {SpeciesListService} from './species-list.service';

@Component({
  selector: 'fl-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SpeciesListService],
})
export class SpeciesListComponent {

  constructor(private readonly list: SpeciesListService) { }

  previous$ = this.list.previous$;
  current$ = this.list.current$;
  next$ = this.list.next$;

  ngOnInit() {
    this.list.start();
  }

  moveForward() {
    this.list.next();
  }

  moveBack() {
    this.list.back();
  }

}