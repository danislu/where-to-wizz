import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import Marker from './../components/MarkerModal';

const stateToProps = (state, { match }) => {
  const { markers: { items, distances } } = state;
  const id = match.params.id;
  const marker = items.find(m => m.id === id);
  return {
    ...marker,
    distance: distances[id],
  };
};

const dispatchToProps = (dispatch, { history }) => ({
  onClosed: history.goBack
});

export default withRouter(connect(stateToProps, dispatchToProps)(Marker));
