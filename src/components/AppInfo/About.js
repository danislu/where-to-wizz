import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const aboutStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 25
  },
  text: {
    fontSize: 15
  }
});

const About = () => (
  <View style={aboutStyle.wrapper}>
    <Text style={aboutStyle.heading}>Where to Wizz - BGO</Text>
    <Text style={aboutStyle.text}>For when you need to go number 1 or 2 in Bergen.</Text>
  </View>
);

export default About;
