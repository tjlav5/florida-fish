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
    const startSpecies = getRandomSpecies();
    console.log(startSpecies);
    this.state.next({
      ...this.state.value,
      species: startSpecies,
    });
  }

  next() {
    // const speciesCount = Object.keys(Species).length;
    // console.log(speciesCount)
    // const rando = Object.keys(Species)[6];
    // console.log(rando);
    // // Math.floor(Math.random()*spciesCount) + 1
    // this.state.next({
    //   ...this.state.value,
    //   species: rando,
    //   previousSpecies: [...this.state.value.previousSpecies, this.state.value.species],
    // });
  }

  back() {
    // if (this.state.value.previousSpecies.length) {
    //   const previousSpecies = [...this.state.value.previousSpecies];
    //   this.state.next({
    //     ...this.state.value,
    //     species: previousSpecies.pop(),
    //     previousSpecies,
    //   });
    // }
  }

  


}