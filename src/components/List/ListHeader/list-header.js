import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const ListHeader = (props) => {
  return (
    <View style={{position: 'relative', flex: 1}}>
      <ImageBackground style={[styles.button, props.style]}
                       source={props.image}>
        <Text style={[styles.text, props.titleStyle]}>{props.title}</Text>
      </ImageBackground>
      <MaterialIcons name="arrow-back" size={24} color="black"/>
    </View>
  );
};

import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  button: {
    height: 200,
    borderRadius: 3,
    overflow: 'hidden'
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'pink'
  }
})

export default ListHeader;
