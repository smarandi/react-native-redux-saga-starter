/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Splash from './component/Splash';

/**
 * Root component wrapped in <Provider>
 *   to access redux store
 */
class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Splash />
      </Provider>
    );
  }
}

export default App;
