import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Marker from './../components/MarkerInfo';

const stateToProps = (state, { match }) => {
  const { markers: { items, distances } } = state;
  const id = match.params.id;
  const marker = items.find(m => m.id === id);
  return {
    ...marker,
    distance: distances[id],
  };
};

export default withRouter(connect(stateToProps)(Marker));
