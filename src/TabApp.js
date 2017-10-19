import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import { Route } from 'react-router-native';
import Icon from './components/Icon';
import MapComponent from './containers/map';
import ListComponent from './containers/list';
import MarkerComponent from './containers/marker';
import AppInfoComponent from './components/AppInfo';
import StatusBar from './components/utils/StatusBar';
import BannerAd from './components/utils/BannerAd';
import styles1 from './components/styles';
import { filterItem } from './utils/filterItem';

const getIcon = (icon, selected) => <Icon name={icon} size={25} style={{ color: selected ? 'blue' : 'black' }} />;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 5
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#eeeeee',
    padding: 10
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //marginTop: 22
  }
});

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'map' };
  }

  render() {
    const { activeFilterCount, itemCount } = this.props;

    return (
      <TabNavigator 
        sceneStyle={{ backgroundColor: 'green' }}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          renderIcon={() => getIcon('map') }
          renderSelectedIcon={() => getIcon('map', true) }
          onPress={() => this.setState({ selectedTab: 'map' })}>
          <MapComponent />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'list'}
          renderIcon={() => getIcon('list-ul') }
          renderSelectedIcon={() => getIcon('list-ul', true) }
          badgeText={itemCount}
          onPress={() => this.setState({ selectedTab: 'list' })}>
          <ListComponent />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'settings'}
          renderIcon={() => getIcon('cog') }
          renderSelectedIcon={() => getIcon('cog', true) }
          badgeText={ activeFilterCount == 0 ? null : activeFilterCount }
          onPress={() => this.setState({ selectedTab: 'settings' })}>
          <AppInfoComponent />
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const mapStateToProps = ({ markers: { items }, filters }) => {
  let activeFilterCount = 0;
  for (var key in filters) {
    if (filters.hasOwnProperty(key)) {
      var element = filters[key];
      if (element.value){
        activeFilterCount += 1;
      }
    }
  }

  const itemCount = items.filter(filterItem(filters)).length;
  return { 
    activeFilterCount,
    itemCount
  };
};

const ConnectedTabs = connect(mapStateToProps)(Tabs);

const otherStyles = {
  parent: {
    display: 'flex',
    height: '100%', /* Or whatever */
  },
  child: {
    width: 100,  /* Or whatever */
    height: 100, /* Or whatever */
    margin: 'auto'  /* Magic! */
  }
};

export default () => (
  <View style={styles.container}>
    <StatusBar />
    <BannerAd />
    <Route key={2} path={"/"} component={ConnectedTabs} />
    <Route key={3} path={"/marker/:id"} exact={false} component={MarkerComponent} /> 
  </View>
);