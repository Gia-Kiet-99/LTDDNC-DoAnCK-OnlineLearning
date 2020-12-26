import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Moment from 'moment'
import Rating from "./rating";
import {convertHour} from "../../core/utils/date-format";

const CourseInfo = (props) => {

  return <View style={[styles.description, props.containerStyle]}>
    <Text style={props.titleStyle}>
      {props.title}
    </Text>
    <Text style={styles.darkText}>
      {props.author}
    </Text>
    <Text style={styles.darkText}>
      {`${props.status} . ${Moment(props.released).format("MMM yyyy")} . ${convertHour(props.duration)}`}
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
