import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Linking
} from 'react-native';
import Icon from './../Icon';

const someRow = {
  flex: 1,
  paddingVertical: 10,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  backgroundColor: 'white'
};

const copyright = {
  marginHorizontal: 10,
  fontSize: 15
};

const About = () => {
  const openLink = () => Linking.openURL('http://danislu.github.io/dass-kart-bgo');
  const openTwitter = () => Linking.openURL('http://twitter.com/danislu');
  const openGithub = () => Linking.openURL('http://github.com/danislu');
  const openInsta = () => Linking.openURL('http://instagr.am/danislu2');

  return (<View style={{ flex: 1 }}>
    <View style={someRow}>
      <TouchableHighlight onPress={openLink}>
        <Text style={copyright}>@danislu</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={openGithub}>
        <Icon name="github" size={20} style={{ marginHorizontal: 10 }} />
      </TouchableHighlight>
      <TouchableHighlight onPress={openTwitter}>
        <Icon name="twitter" size={20} style={{ marginHorizontal: 10 }} />
      </TouchableHighlight>
      <TouchableHighlight onPress={openInsta}>
        <Icon name="instagram" size={20} style={{ marginHorizontal: 10 }} />
      </TouchableHighlight>
    </View>
  </View>);
};

export default About;
