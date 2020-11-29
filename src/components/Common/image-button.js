import React from 'react';
import {StyleSheet, Text, ImageBackground, Pressable} from 'react-native';
import {ImageButtonType, listName, ScreenName, NavigatorName} from "../../globals/constants";

const ImageButton = (props) => {
  const onPressed = () => {
    switch (props.type) {
      case ImageButtonType.course:
        return props.navigation.navigate(NavigatorName.listStack,
          {
            screen: ScreenName.studyList,
            params: {
              title: props.data.title,
              kind: listName.course,
              style: {
                marginHorizontal: 15
              },
            }
          })
      case ImageButtonType.general:
        return props.navigation.navigate(NavigatorName.fieldDetailStack,
          {
            screen: ScreenName.fieldDetail,
            params: {
              field: props.data.title
            }
          })
    }
  }

  return (
    <ImageBackground style={[styles.button, props.style]}
                     source={props.data.source}>
      <Pressable style={styles.touch}
                 onPress={onPressed}>
        <Text style={[styles.text, props.titleStyle]}>{props.data.title.toUpperCase()}</Text>
      </Pressable>
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
