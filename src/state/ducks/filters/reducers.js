import { CHANGE_FILTER } from './types';

const initalFilter = {
  5: {
    id: 5,
    icon: 'venus',
    title: 'Ikke vis bare pissoir',
    value: false,
    func: item => item.content.pissoir_only !== '1'
  },
  2: {
    id: 2,
    icon: 'wheelchair',
    title: 'Rullestol tilgang',
    value: false,
    func: item => item.content.rullestol === '1'
  },
  3: {
    id: 3,
    icon: 'child',
    title: 'Stellerom',
    value: false,
    func: item => item.content.stellerom === '1'
  },
  4: {
    id: 4,
    icon: 'dollar',
    title: 'Gratis',
    value: false,
    func: item => item.content.pris === 'NULL'
  }
};

export const filter = (state = initalFilter, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state,
        [payload.id]: Object.assign({}, state[payload.id], { value: payload.value })
      };
    default:
      break;
  }
  return state;
};
