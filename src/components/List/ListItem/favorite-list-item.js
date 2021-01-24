import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {ScreenName} from "../../../globals/constants";
import Rating from "../../Common/rating";

function FavoriteListItem(props) {
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
      <View style={styles.description}>
        <Text>
          {item.courseTitle}
        </Text>
        <Text style={styles.darkText}>
          {item.instructorName}
        </Text>
        <View>
          <Rating value={item.courseAveragePoint}/>
        </View>
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
    // marginLeft: 10,
  },
  description: {
    flex: 1,
    paddingVertical: 5,
    marginLeft: 10
  },
  title: {
    // fontSize: 14
  },
  darkText: {
    fontSize: 12,
    color: 'gray'
  },
})

export default FavoriteListItem;