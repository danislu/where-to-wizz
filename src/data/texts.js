
export const mapText = {
  title: () => 'Where to Wizz - Bergen'
};

export const texts = {
  prefix: () => 'Doen på',
  costSomething: cost => `koster ${cost} kr`,
  costNothing: () => 'koster ingenting',
  onlyPissoir: () => 'har bare pissoar',
  distance: dist => `er ${dist} meter unna`,
  hasWheelcharAccess: () => 'har rullestol tilgang',
  hasNoWheelcharAccess: () => 'har ikke rullestol tilgang',
  hasBabyStuff: () => 'har stellerom',
  hasNoBabyStuff: () => 'uten stellerom',
};

export const about = {
  title: () => 'Where to Wizz - Bergen',
  myLocation: () => 'Sentrer'
};

export default {
  mapText,
  texts,
  about
};
