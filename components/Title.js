import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    width: '60%',
    paddingTop: '10%'
  },
  titleText: {
    color: 'white'
  }
});

function Title(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>Welcome to our React-Native Productivity App development project.</Text>
      <Text style={styles.titleText}>Be sure to sign up for a GitHub account and request to be added to the project's repository.</Text>
    </View>
  );
}

export default Title;
