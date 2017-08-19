
export const mapText = {
  title: () => 'Where to Wizz - Bergen'
};

export const texts = {
  prefix: () => 'Doen på',
  costSomething: cost => `Koster ${cost} kr`,
  costNothing: () => 'Koster ingenting',
  onlyPissoir: () => 'Har bare pissoar',
  distance: dist => `Er ${dist} meter unna`,
  hasWheelcharAccess: () => 'Har rullestol tilgang',
  hasNoWheelcharAccess: () => 'Har ikke rullestol tilgang',
  hasBabyStuff: () => 'Med stellerom',
  hasNoBabyStuff: () => 'Uten stellerom',
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
