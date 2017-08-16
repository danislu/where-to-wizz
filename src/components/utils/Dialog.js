import React, { PropTypes } from 'react';
import { TouchableOpacity as Touchable } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import styles from './../styles';

const Dialog = ({ goBack, children }) => (
  <Touchable style={styles.dialog} onPress={goBack}>
    { children }
  </Touchable>
);

Dialog.propTypes = {
  goBack: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

const dispatchToProps = (dispatch, { history }) => ({
  goBack: history.goBack
});

export default withRouter(connect(null, dispatchToProps)(Dialog));
