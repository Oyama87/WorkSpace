import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Button1(props) {
  return (
      <TouchableOpacity style={touchableStyle.touchableButton}>
        <Text style={touchableStyle.touchableText} >
          {props.whatItDoes}
        </Text>
      </TouchableOpacity>
  );
}

const touchableStyle = StyleSheet.create({
  touchableButton: {
    backgroundColor: 'blue',
    padding: '5%',
    borderRadius: 5
  },
  touchableText: {
    fontFamily: 'sans-serif',
    color: 'white',
    textAlign: 'center'
  }
});
