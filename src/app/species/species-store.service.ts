import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {Species} from './species.enum';

interface State {
  species?: Species;
  previousSpecies: Species[];
  nextSpecies?: Species;
}

const INITIAL_STATE: State = {
  previousSpecies: [],
};

@Injectable()
export class SpeciesStoreService {

  state = new BehaviorSubject<State>(INITIAL_STATE);

  next() {
    const speciesCount = Object.keys(Species).length;
    // Math.floor(Math.random()*spciesCount) + 1

  }

  back() {
    if (this.state.value.previousSpecies.length) {
      const previousSpecies = [...this.state.value.previousSpecies];
      this.state.next({
        ...this.state.value,
        species: previousSpecies.pop(),
        previousSpecies,
      });
    }
  }

  


}