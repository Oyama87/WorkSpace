import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Title from './components/Title.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/graphic.png')} style={styles.icon} />
        <Title />
        <Text style={styles.git_Hub_URL}>https://github.com/Oyama87/WorkSpace</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  git_Hub_URL: {
    padding: '5%',
    color: 'white'
  },
  icon: {
    height: '20%',
    width: '35%'
  }
});
