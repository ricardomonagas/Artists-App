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

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistsList from './ArtistsList'
import { getArtists } from './ApiClient'


export default class HomeView extends Component {

  state = {

    artists: []

  }

  componentDidMount() {

    getArtists().then(data => this.setState({ artists : data }));

  }


  render() {

    const artists = this.state.artists

    return (
      <View style={styles.container}>
        <ArtistsList artists={artists} />
      </View>  
    
    );

  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  }

});
