import React, { PropTypes } from 'react';
import { 
  StyleSheet,
  TouchableOpacity as Touchable } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

const styles = StyleSheet.create({
  dialog: {
    position: 'absolute',
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
    backgroundColor: 'white', //'rgba(0, 0, 0, 0.2)',
    borderWidth: 1
  }
});

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
