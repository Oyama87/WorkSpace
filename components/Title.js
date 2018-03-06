import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    width: '80%',
    paddingTop: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    color: 'white'
  }
});

function Title(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>Welcome to our React-Native App development project.</Text>
    </View>
  );
}

export default Title;
