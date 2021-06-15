/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import React, {Component} from 'react';
export default class AwesomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

