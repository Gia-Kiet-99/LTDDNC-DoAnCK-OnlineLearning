import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../../globals/constants";
import Rating from "../../../Common/rating";

const Separator = () => {
  return (
    <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 3}}/>
  )
}

function FavoriteSectionItem(props) {
  const item = props.item

  const ItemPressed = () => {
    props.navigation.navigate(ScreenName.courseDetail, {
      data: props.item
    })
  }

  return <View>
    <TouchableOpacity
      style={styles.container}
      onPress={ItemPressed}>
      <View style={styles.content}>
        <Image style={styles.image} source={{uri: item.courseImage}}/>
        <Separator/>
        <View style={styles.description}>
          <Text>
            {item.courseTitle}
          </Text>
          <Text style={styles.darkText}>
            {item.instructorName}
          </Text>
          {/*<Text style={styles.darkText}>*/}
          {/*  {`${props.status} . ${Moment(props.released).format("MMM yyyy")} . ${convertHour(props.duration)}`}*/}
          {/*</Text>*/}
          <View>
            <Rating value={item.courseAveragePoint}/>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>

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
  courseInfo: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  description: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
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

export default FavoriteSectionItem;