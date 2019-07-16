/* eslint-disable react/prop-types */
import React from 'react';
import {TextInput} from 'react-native-paper';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../../styles/theme.style';

const TextField = (props) => (
  <View style={props.styleContainer ? props.styleContainer : styles.container}>
    <TextInput 
      label={props.label} 
      style={props.style ? props.style : styles.textInput} 
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText} 
      onBlur={props.onBlur}
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      error={props.error}/>
    {props.error ? <Text style={styles.error}>{props.error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    backgroundColor: colors.white
  },
  error: {
    color: colors.darkred,
    marginTop: 5
  },
});

export default TextField;