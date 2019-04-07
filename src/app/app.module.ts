import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SpeciesCardComponent } from './species/species-card/species-card.component';
import { SpeciesListComponent } from './species/species-list/species-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SpeciesCardComponent, SpeciesListComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
