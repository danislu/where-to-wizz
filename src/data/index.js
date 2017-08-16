// import take from 'lodash/take';
import bgoData from './bgo';

export const BGO_DASS = 'BGO_DASS';

const createMarker = dass => ({
  pos: {
    latitude: parseFloat(dass.latitude),
    longitude: parseFloat(dass.longitude)
  },
    // icon: 'https://dl.dropboxusercontent.com/u/17093134/restroom.png',
  title: dass.plassering,
  id: dass.id,
  rating: 0, // Math.floor((Math.random() * 5) + 1),
  content: dass// convertDoToMakrerInfo(dass)
});

const parseBgoData = () => bgoData.entries.map(createMarker);

export const getData = () => parseBgoData(); // take(parseBgoData(), 2);

