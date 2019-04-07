import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Species, getRandomSpecies} from '../species';

interface State {
  species?: Species;
  previousSpecies: Species[];
  nextSpecies?: Species;
}

const INITIAL_STATE: State = {
  previousSpecies: [],
};

@Injectable()
export class SpeciesListService {

  state = new BehaviorSubject<State>(INITIAL_STATE);

  current$ = this.state.pipe(map(s => s.species));
  next$ = this.state.pipe(map(s => s.nextSpecies));
  previous$ = this.state.pipe(map(s => !!s.previousSpecies.length &&  s.previousSpecies[s.previousSpecies.length - 1] || undefined));

  start() {
    const curr = this.state.value;
    this.state.next({
      ...curr,
      species: getRandomSpecies(),
      nextSpecies: getRandomSpecies(),
    });
  }

  next() {
    const curr = this.state.value;
    this.state.next({
      ...curr,
      species: curr.nextSpecies,
      nextSpecies: getRandomSpecies(),
      previousSpecies: [...curr.previousSpecies, curr.species],
    })
  }

  back() {
    const curr = this.state.value;
    if (curr.previousSpecies.length) {
      const pop = curr.previousSpecies.pop();
      this.state.next({
        ...curr,
        species: pop,
        previousSpecies: curr.previousSpecies,
        nextSpecies: curr.species,
      });
    }
  }
}