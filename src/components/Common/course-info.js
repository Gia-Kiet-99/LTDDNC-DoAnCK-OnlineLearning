import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Rating from "./rating";

const CourseInfo = (props) => {
  return <View style={[styles.description, props.containerStyle]}>
    <Text style={props.titleStyle}>
      {props.title}
    </Text>
    <Text style={styles.darkText}>
      {props.author}
    </Text>
    <Text style={styles.darkText}>
      {`${props.level} . ${props.released} . ${props.duration}`}
    </Text>
    <View>
      <Rating/>
    </View>
  </View>
};

const styles = StyleSheet.create({
  description: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  title: {
    // fontSize: 14
  },
  darkText: {
    fontSize: 12,
    color: 'gray'
  },
})

export default CourseInfo;
