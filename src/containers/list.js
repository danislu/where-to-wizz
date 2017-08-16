import { connect } from 'react-redux';
import ListView from './../components/MarkerList';
import { filterItem } from './../utils/filterItem';

const stateToProps = ({ markers: { items, distances }, filters }) => ({
  markers: items
    .filter(filterItem(filters))
    .map(i => ({
      ...i,
      distance: distances[i.id]
    })),
  getMarkerPath: ({ id }) => `/marker/${id}`
});

export default connect(stateToProps)(ListView);
