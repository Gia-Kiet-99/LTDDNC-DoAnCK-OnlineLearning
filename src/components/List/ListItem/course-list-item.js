import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import CourseInfo from "../../Common/course-info";
import {ScreenName} from "../../../globals/constants";

const CourseListItem = (props) => {
  const item = props.item
  // const authorName =

  const onPressListItem = () => {
    props.navigation.push(ScreenName.courseDetail, {
      data: props.item
    })
  }
  const averagePoint = Math.round((item.formalityPoint + item.contentPoint + item.presentationPoint) / 3)
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={onPressListItem}>

      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: item.imageUrl}}/>
      </View>
      <CourseInfo
        containerStyle={courseInfoStyle.container}
        titleStyle={courseInfoStyle.largerTitle}
        title={item.title}
        author={(props.authorName === undefined) ? item["instructor.user.name"] : props.authorName}
        status={item.status}
        released={item.createdAt}
        duration={item.totalHours}
        rate={averagePoint}
        style={{fontSize: 16}}/>

      {/*<MenuButton item={item}/>*/}
    </TouchableOpacity>
  );
};

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

export default CourseListItem;
