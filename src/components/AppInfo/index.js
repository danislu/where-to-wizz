import React from 'react';
import { ScrollView } from 'react-native';
import Dialog from './../utils/Dialog';
import Filter from './../../containers/filter';
import Social from './Social';
import About from './About';
import BannerAd from './../utils/BannerAd';
import styles from './../styles';

export default () => (
  <Dialog>
    <ScrollView style={styles.container}>
      <BannerAd />
      <Social />
      <About />
      <Filter />
    </ScrollView>
  </Dialog>
);
