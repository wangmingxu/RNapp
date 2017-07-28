/**
 * Load the App component.
 *  (All the fun stuff happens in "/src/index.js")
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Welcome from './src/layouts/welcome';

const AppContainer = () =>
  <Navigator  initialRoute={{ component: Welcome }}
              configureScene={ () => Navigator.SceneConfigs.FloatFromBottom }
              renderScene={ (route, navigator) => {
                let Component = route.component;
                return React.createElement(Component, { ...route.passProps, navigator })
              }}
  />

AppRegistry.registerComponent('RNapp', () => AppContainer);
