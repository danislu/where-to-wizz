import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Route } from 'react-router-native';
import { default as NavigationBar } from 'react-native-navbar';
import StatusBar from './components/utils/StatusBar';
import { default as routes, rootRoute } from './routes';
import BannerAd from './components/utils/BannerAd';

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
    justifyContent: 'flex-start'
  }
});

const titleConfig = {
  title: 'Where To Wizz',
  style: { fontSize: 27 }
};

const rightButtonConfig = (
  <View style={{ flexDirection: 'row' }}>
    { routes.map((r, i) => (<Route key={i} path={r.path} exact={r.exact} component={r.rightLinkComponent} />)) }
  </View>
);

const leftButtonConfig = (
  <View style={{ flexDirection: 'row' }}>
    { routes.map((r, i) => (<Route key={i} path={r.path} exact={r.exact} component={r.leftLinkComponent} />)) }
  </View>
);

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

const App = () => (
  <View style={styles.container}>
    <StatusBar />
    
    <NavigationBar
      style={{ alignItems: 'center' }}
      title={titleConfig}
      rightButton={rightButtonConfig}
      leftButton={leftButtonConfig}
    />
    <View style={otherStyles.parent}>
      <Route key={rootRoute.key} path={rootRoute.path} exact={false} component={rootRoute.mainComponent} />
      {
        routes
          .filter(r => !r.isRoot)
          .map((r, i) => (<Route key={i} path={r.path} exact={r.exact} component={r.mainComponent} />))
      }
      <BannerAd />
    </View>
  </View>
);

export default App;
