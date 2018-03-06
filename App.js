import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Title from './components/Title.js';
import Button1 from './components/Button1.js';
import Button2 from './components/Button2.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/graphic.png')} style={styles.icon}
          style={{marginTop: '10%'}}
        />
        <Title />
        <Text style={styles.git_Hub_URL}>https://github.com/Oyama87/WorkSpace</Text>
        <View style={styles.buttonContainer}>
          <Button1 whatItDoes="This button fades on tap" />
          <Button2 whatItDoes="This button highlights on tap" />
        </View>
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
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});
