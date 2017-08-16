import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

export default class BannerAd extends Component {

  constructor(props) {
    super(props);
    this.state = { failed: false };

    this.bannerError = this.bannerError.bind(this);
  }

  bannerError(error) {
    this.setState({ failed: true });
    console.log(error);
  }

  render() {
    const { bannerSize, adUnitID } = this.props;
    const { failed } = this.state;

    const theAdd = failed
      ? (null)
      : (<AdMobBanner 
        style={{ marginBottom: 10 }}
        bannerSize={ bannerSize || "fullBanner" }
        adUnitID={ adUnitID || "your-admob-unit-id" }
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError} />)

    return (
      <View style={{ backgroundColor: 'yellow' }}>
        { theAdd }
      </View>
    );
  }
}

