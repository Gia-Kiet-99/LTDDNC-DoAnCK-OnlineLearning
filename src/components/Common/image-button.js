import React from 'react';
import {StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {ScreenName} from "../../globals/constants";

const ImageButton = (props) => {
  const navigation = useNavigation()

  const onImageButtonPressed = () => {
    navigation.navigate(ScreenName.studyList, {
      type: props.type,
      title: props.data.title
    })
  }

  return (
    <ImageBackground
      style={[styles.button, props.style]}
      source={props.data.source}>
      <TouchableOpacity
        onPress={onImageButtonPressed}
        style={styles.touch}>
        <Text style={[styles.text, props.titleStyle]}>{props.data.title.toUpperCase()}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 100,
    borderRadius: 3,
    overflow: 'hidden'
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'pink'
  }
})

export default ImageButton;
