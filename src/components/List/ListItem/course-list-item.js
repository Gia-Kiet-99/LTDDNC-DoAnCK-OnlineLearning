import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import CourseInfo from "../../Common/course-info";
import {ScreenName} from "../../../globals/constants";
import MenuButton from "./MenuButton/menu-button";

const CourseListItem = (props) => {
  const item = props.item

  const onPressListItem = () => {
    // if (props.navigation !== undefined) {
    //   props.navigation.navigate(NavigatorName.courseDetailStack,
    //     {
    //       screen: ScreenName.courseDetail,
    //       params: {
    //         courseId: item.id
    //       }
    //     })
    // }

    props.navigation.navigate(ScreenName.courseDetail, {
      courseId: item.id
    })
  }

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={onPressListItem}>

      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={item.image}/>
      </View>
      <CourseInfo
        containerStyle={courseInfoStyle.container}
        titleStyle={courseInfoStyle.largerTitle}
        title={item.title}
        author={item.authorName}
        level={item.level}
        released={item.released}
        duration={item.duration}
        style={{fontSize: 16}}/>

      <MenuButton item={item}/>
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
    paddingVertical: 15,
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
