import React from 'react';
import { ScrollView } from 'react-native';
import Dialog from './../utils/Dialog';
import Filter from './../../containers/filter';
import Social from './Social';
import About from './About';
import BannerAd from './../utils/BannerAd';
import styles from './../styles';

export default () => (
  <ScrollView style={styles.container}>
    <About />
    <Social />
    <Filter />
  </ScrollView>
);
