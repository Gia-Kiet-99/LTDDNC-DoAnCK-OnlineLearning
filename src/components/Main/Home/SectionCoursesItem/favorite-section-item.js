import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../../globals/constants";
import CourseInfo from "../../../Common/course-info";

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
        <Image style={styles.image} source={{uri: props.item.imageUrl}}/>
        <Separator/>
        <CourseInfo
          containerStyle={courseInfoStyle.container}
          title={item.title}
          author={item.instructor.name}
          status={item.status}
          released={item.createdAt}
          duration={item.totalHours}
          rate={item.averagePoint}/>
      </View>
    </TouchableOpacity>
  </View>

}

const courseInfoStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  largerTitle: {
    fontSize: 16,
  }
})

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
  }
})

export default FavoriteSectionItem;