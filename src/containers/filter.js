import { connect } from 'react-redux';
import FilterView from './../components/AppInfo/Filter';
import { operations } from './../state/ducks';

const stateToProps = ({ filters }) => ({
  filters
});

const dispatchToProps = dispatch => ({
  changeFilter: (filter, value) => dispatch(operations.changeFilter(filter, value))
});

export default connect(stateToProps, dispatchToProps)(FilterView);
