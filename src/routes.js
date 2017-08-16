import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Link, withRouter } from 'react-router-native';
import MapComponent from './containers/map';
import ListComponent from './containers/list';
import MarkerComponent from './containers/marker';
import AppInfoComponent from './components/AppInfo';
import Icon from './components/Icon';

const mapLink = () => (<View style={{ flexDirection: 'row' }}>
  <Link to="/list">
    <Icon name="list-ul" size={30} color={'black'} style={{ marginHorizontal: 10 }} />
  </Link>
</View>);

const listLink = () => (<View style={{ flexDirection: 'row' }}>
  <Link to="/">
    <Icon name="map" size={30} color={'black'} style={{ marginHorizontal: 10 }} />
  </Link>
</View>);

const settingsLink = () => (<View style={{ flexDirection: 'row' }}>
  <Link to="/settings">
    <Icon name="cog" size={30} color={'black'} style={{ marginHorizontal: 10 }} />
  </Link>
</View>);

const backLink = withRouter(({ history }) => (<View style={{ flexDirection: 'row' }}>
  <TouchableHighlight onPress={() => history.goBack()}> */}
    <Icon name="arrow-left" size={30} color={'black'} style={{ marginHorizontal: 10 }} />
  </TouchableHighlight>
</View>));

const closeLink = withRouter(({ history }) => (<View style={{ flexDirection: 'row' }}>
  <TouchableHighlight onPress={() => history.goBack()}>
    <Icon name="times-circle" size={30} color={'black'} style={{ marginHorizontal: 10 }} />
  </TouchableHighlight>
</View>));

const noopLink = () => (<View />);

export const rootRoute = {
  path: '/',
  exact: true,
  mainComponent: MapComponent,
  leftLinkComponent: mapLink,
  rightLinkComponent: settingsLink,
  isRoot: true,
};

export default [
  rootRoute,
  {
    path: '/list',
    mainComponent: ListComponent,
    leftLinkComponent: listLink,
    rightLinkComponent: settingsLink
  },
  {
    path: '/marker/:id',
    mainComponent: MarkerComponent,
    rightLinkComponent: closeLink
  },
  {
    path: '/settings',
    mainComponent: AppInfoComponent,
    rightLinkComponent: closeLink
  }
];
