import React from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../globals/constants";
import CourseInfo from "../../Common/course-info";

function FavoriteListItem(props) {
  const item = props.item
  // const authorName =

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
        <Image style={styles.image} source={{uri: item.imageUrl}}/>
      </View>
      {/*item["instructor.user.name"]*/}
      <CourseInfo
        containerStyle={courseInfoStyle.container}
        titleStyle={courseInfoStyle.largerTitle}
        title={item.title}
        author={item.instructor.name}
        status={item.status}
        released={item.createdAt}
        duration={item.totalHours}
        rate={item.averagePoint}
        style={{fontSize: 16}}/>

      {/*<MenuButton item={item}/>*/}
    </TouchableOpacity>
  );
}

const courseInfoStyle = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  largerTitle: {
    fontSize: 16,
  }
})

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
})

export default FavoriteListItem;