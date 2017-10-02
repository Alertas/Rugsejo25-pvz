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
  View
} from 'react-native';
import Header from './src/components/component';
import NoHeader from './src/components/component2';

class rugsejo25pvz extends Component {
  render() {
    let pic = { uri: 'https://www.w3schools.com/css/trolltunga.jpg' };
    if (5>4){ 
      return 
      <Image source={pic} style={{width: 150, height: 100 }}/>
    } 
    else return <NoHeader />
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rugsejo25pvz', () => rugsejo25pvz);
