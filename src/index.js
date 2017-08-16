import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, AndroidBackButton } from 'react-router-native';
import App from './App';
import { store, history } from './state/store';
import { operations } from './state/ducks';

class RootComponent extends React.Component {
  componentDidMount() {
    store.dispatch(operations.startUp());
  }

  componentWillUnmount() {
    store.dispatch(operations.shoutDown());
  }

  render() {
    return (<Provider store={store}>
      <Router history={history}>
        {/* <AndroidBackButton> */}
        <App />
        {/* </AndroidBackButton> */}
      </Router>
    </Provider>);
  }
}

export default RootComponent;
