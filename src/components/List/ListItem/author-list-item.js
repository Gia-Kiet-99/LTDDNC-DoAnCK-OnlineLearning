import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {NavigatorName, ScreenName} from "../../../globals/constants";

const AuthorListItem = (props) => {

  const onItemPressed = () => {
    if (props.navigation !== undefined) {
      props.navigation.navigate(NavigatorName.authorDetailStack,
        {
          screen: ScreenName.authorDetail,
          params: {
            data: props.item
          }
        })
    }
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onItemPressed}>
      <Image style={styles.avatar} source={props.item.authorAvatar}/>
      <View style={styles.description}>
        <Text style={styles.name}>{props.item.authorName}</Text>
        <Text style={styles.courseNumber}>{props.item.numberOfCourses} Courses</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 64/2,
  },
  description: {
    paddingVertical: 15,
    marginLeft: 10
  },
  name: {
    fontSize: 16
  },
  courseNumber: {
    fontSize: 12,
    color: 'gray'
  }
})

export default AuthorListItem;
