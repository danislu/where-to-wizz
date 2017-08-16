import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native';
import styles from './styles';

const CloseButton = ({ onPress }) => (
  <TouchableHighlight
    style={[styles.button, styles.close]}
    underlayColor="#aaa"
    onPress={onPress}
  >
    <Icon name="times-circle" size={35} style={{ marginHorizontal: 10 }} />
  </TouchableHighlight>);

export default CloseButton;
