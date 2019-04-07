export interface Species {
  name: string;
  imageUrls: string[];
}

export function getRandomSpecies() {
  return species[Math.floor(Math.random() * species.length) + 1];
}

export const species: Species[] = [{
  name: 'AFRICAN_POMPANO',
  imageUrls: [],
}];