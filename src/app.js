/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import HomeView from './HomeView'
import {Scene, Router} from 'react-native-router-flux';


export default class ArtistsApp extends Component {

  render() {

    return <Router>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar={true} />
      </Scene>
    </Router>

  }

}

AppRegistry.registerComponent('ArtistsApp', () => ArtistsApp);
