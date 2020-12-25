import React, {useContext} from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {convertHourToHHmmSS} from "../../../../core/utils/date-format";

const ListLessonItem = (props) => {
  const lessonInfo = props.item
  // console.log("lessons: ", lessonInfo)
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.onLessonItemPressed(lessonInfo.id)}>
      <Image style={styles.icon} source={require('../../../../../assets/gray-dot.png')}/>
      <Text style={{flex: 1, marginLeft: 10}}>{lessonInfo.name}</Text>
      <Text>{convertHourToHHmmSS(lessonInfo.hours)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    height: 8,
    width: 8,
  }
})

export default ListLessonItem;
