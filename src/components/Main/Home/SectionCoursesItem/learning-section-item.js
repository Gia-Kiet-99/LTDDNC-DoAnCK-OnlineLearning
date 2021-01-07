import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../../globals/constants";

function LearningSectionItem(props) {

  const item = props.item

  const ItemPressed = () => {
    props.navigation.navigate(ScreenName.courseDetail, {
      data: props.item
    })
  }

  return <TouchableOpacity
    style={styles.container}
    onPress={ItemPressed}>
    <View style={styles.content}>
      <Image style={styles.image} source={{uri: item.courseImage}}/>

      <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 3}}/>

      <View style={styles.description}>
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

    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  content: {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: '#eee',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  image: {
    height: 100,
    width: '100%'
  },
  description: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10
    // backgroundColor: 'pink'
  },
  title: {
    // fontSize: 16
  },
  darkText: {
    fontSize: 12,
    color: 'gray'
  },
})

export default LearningSectionItem;