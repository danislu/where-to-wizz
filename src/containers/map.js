import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import MyMap from './../components/map';
import { operations } from './../state/ducks';
import { filterItem } from './../utils/filterItem';

const stateToProps = ({ markers: { items }, map: { currentPos, initialRegion }, filters }) => ({
  items: items.filter(filterItem(filters)),
  initialRegion,
  currentPos,
  getMarkerPath: ({ id }) => `/marker/${id}`,
});

const dispToState = dispatch => ({
  mapChanging: region => dispatch(operations.mapChanging(region))
});

export default withRouter(connect(stateToProps, dispToState)(MyMap));
