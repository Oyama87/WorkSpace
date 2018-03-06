import React from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text
} from 'react-native';

export default function Button2(props) {
  return (
    <TouchableHighlight
      style={touchableStyle.touchableButton}
      underlayColor='yellow'
      onPress={()=>{}}
      >
      <Text style={touchableStyle.touchableText} >
        {props.whatItDoes}
      </Text>
    </TouchableHighlight>
  );
}

const touchableStyle = StyleSheet.create({
  touchableButton: {
    backgroundColor: 'red',
    padding: '5%',
    borderRadius: 5
  },
  touchableText: {
    fontFamily: 'sans-serif',
    color: 'black',
    textAlign: 'center'
  }
});
