import React, { PropTypes } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { Link } from 'react-router-native';
import Icon from './Icon';
import styles from './styles';

const userIcon = (<Icon name="map-marker" style={{ color: 'red' }} size={25} />);

const icon = (<View style={{ flexDirection: 'row' }}>
  <Icon name="male" size={18} />
  <Icon name="female" size={18} />
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
      >
        <Link to={getMarkerPath(marker)}>
        { icon }
        </Link>
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
