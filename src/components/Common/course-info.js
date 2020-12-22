import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment'
import Rating from "./rating";

const convertHour = (hours) => {
  let hour = 0
  while ((hours -= 1) >= 0) {
    hour++
  }
  let minute = Math.floor((hours + 1) * 60);
  return (hour > 0) ? `${hour}h${minute}m` : `${minute}m`
}

const CourseInfo = (props) => {

  return <View style={[styles.description, props.containerStyle]}>
    <Text style={props.titleStyle}>
      {props.title}
    </Text>
    <Text style={styles.darkText}>
      {props.author}
    </Text>
    <Text style={styles.darkText}>
      {`${props.level} . ${Moment(props.released).format("MMM yyyy")} . ${convertHour(props.duration)}`}
    </Text>
    <View>
      <Rating value={props.rate}/>
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
