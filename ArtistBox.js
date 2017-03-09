/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends Component {


  render() {

    const { image, name, likes, comments } = this.props.artist

    return (

        <View style={styles.artistBox}>
          
          <Image style={styles.image} source={{ uri: image }} />
          
          <View style={styles.info}>

            <Text style={styles.name}>{name}</Text>
            
            <View style={styles.actionsContainer}>

              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" color="gray" />
                <Text style={styles.count}>{likes}</Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" color="gray" />
                <Text style={styles.count}>{comments}</Text>
              </View>

            </View>  

          </View>
        
        </View>     
    
    
    );

  }

}

const styles = StyleSheet.create({

  
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: 2
    },
    elevation: 2
  },
  
  image: {
    width: 200,
    height: 200
  },
  
  info: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  
  name: {
    fontSize: 20,
    marginTop: 10
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }

});
