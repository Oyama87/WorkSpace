import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
