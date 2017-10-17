import React, { Component } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import { Link } from 'react-router-native';
import { 
  AdMobBanner, 
  AdMobInterstitial, 
  PublisherBanner,
  AdMobRewarded
} from 'react-native-admob'

const adUnitID = Platform.OS === "ios"
  ? "ca-app-pub-8389467357810382/6614743300"
  : "ca-app-pub-8389467357810382/6347628923"

export default class BannerAd extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
    this.bannerError = this.bannerError.bind(this);
  }

  bannerError(error) {
    this.setState({ failed: true });
  }

  render() {
    const { failed } = this.state;

    const theAdd = (
      <AdMobBanner 
        bannerSize={"fullBanner"}
        adUnitID={adUnitID}
        testDeviceID="EMULATOR"
        didFailToReceiveAdWithError={this.bannerError} />
    );

    return (
      <View style={{ backgroundColor: 'yellow' }}>
        { theAdd }
      </View>
    );
  }
}

//App ID: ca-app-pub-8389467357810382~6865669521
//Ad unit ID: ca-app-pub-8389467357810382/6614743300

// {/* { failed ? null : theAdd } */}

