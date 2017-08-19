import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-native';
// import App from './App';
import App from './TabApp';
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
        <App />
      </Router>
    </Provider>);
  }
}

export default RootComponent;
