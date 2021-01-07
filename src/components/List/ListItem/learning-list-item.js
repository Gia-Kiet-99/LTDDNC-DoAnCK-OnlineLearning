import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../globals/constants";

function LearningListItem(props) {
  const item = props.item

  const onPressListItem = () => {
    props.navigation.push(ScreenName.courseDetail, {
      data: props.item
    })
  }

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={onPressListItem}>

      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: item.courseImage}}/>
      </View>

      <View style={[styles.description, props.containerStyle]}>
        <Text style={styles.title}>
          {item.courseTitle}
        </Text>
        <Text style={styles.darkText}>
          {item.instructorName}
        </Text>
        <Text style={styles.darkText}>
          {/*{`${props.status} . ${Moment(props.released).format("MMM yyyy")} . ${convertHour(props.duration)}`}*/}
          {`Process: ${item.process}%`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  imageWrapper: {
    // flex: 3,
    width: 80,
    height: 64,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  description: {
    flex: 1,
    marginLeft: 10,
    // backgroundColor: 'pink'
  },
  title: {
    fontSize: 16
  },
  darkText: {
    fontSize: 12,
    color: 'gray'
  },
})

export default LearningListItem;