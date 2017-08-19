import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-native';
import styles from './styles';
import { getContentIcons } from './MarkerIconList';
import BannerAd from './utils/BannerAd';

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingTop: 5,
    paddingBottom: 5
  },
  link: {
    marginHorizontal: 10,
    marginTop: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
});

const getDistance = (distance) => {
  if (distance) {
    return <Text>{distance}m</Text>;
  }
  return null;
};

const renderItem = getMarkerPath => ({ item: { id, title, content, distance } }) => (
  <Link style={styles2.link} to={getMarkerPath({ id })}>
    <View key={id} style={styles2.item}>
      <Text>{title}</Text>
      <View style={styles2.icons}>
        { getContentIcons(content, 15) }
        { getDistance(distance) }
      </View>
    </View>
  </Link>
);

export default ({ markers, getMarkerPath }) => {
  return (
    <View style={styles.dialog}>
      <FlatList
        data={markers.sort((a, b) => a.distance - b.distance)}
        renderItem={renderItem(getMarkerPath)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
