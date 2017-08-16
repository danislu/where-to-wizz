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
    padding: 10,
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
    <Text style={aboutStyle.heading}>But why?</Text>
    <Text style={aboutStyle.text}>Everybody need to pee, this will help you find where to do it in Bergen.</Text>
  </View>
);

export default About;
