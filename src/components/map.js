import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import Icon from './Icon';
import styles from './styles';

const userIcon = (<Icon name="map-marker" style={{ color: 'red' }} size={30} />);

const iconSize = 25;
const icon = (<View style={{ flexDirection: 'row' }}>
  <Icon name="male" size={iconSize} />
  <Icon name="female" size={iconSize} />
</View>);

const getCurrentPosMarker = (currentPos) => {
  console.log("currentPos", currentPos);
  if (currentPos) {
    return (
      <MapView.Marker
        pinColor={'red'}
        coordinate={currentPos}
        key={currentPos}
      >
      { userIcon }
      </MapView.Marker>
    );
  }
  return null;
};
        
const MyMap = ({
  items,
  currentPos,
  initialRegion,
  getMarkerPath,
  history,
  mapChanging
}) => (<View style={styles.mapContainer}>
  <MapView
    style={styles.map}
    initialRegion={initialRegion}
    onRegionChange={region => mapChanging(region)}
  >
    {items.map((marker, idx) => (
      <MapView.Marker
        coordinate={marker.pos}
        key={idx + JSON.stringify(marker)}
        onPress={() => history.push(getMarkerPath(marker))} >
          { icon }
      </MapView.Marker>
    ))}
    { getCurrentPosMarker(currentPos) }
  </MapView>
</View>);

MyMap.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMarkerPath: PropTypes.func.isRequired,
  currentPos: PropTypes.shape({}),
  initialRegion: PropTypes.shape({}).isRequired,
  mapChanging: PropTypes.func.isRequired
};

MyMap.defaultProps = {
  currentPos: null
};

export default MyMap;
