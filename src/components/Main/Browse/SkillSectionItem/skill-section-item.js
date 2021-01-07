import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {listType, ScreenName} from "../../../../globals/constants";

const SkillSectionItem = (props) => {

  const onItemPressed = () => {
      props.navigation.navigate(ScreenName.studyList, {
        categoryId: props.item.id,
        title: props.item.name,
        type: listType.categoryCourses
      })
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onItemPressed}>
      <Text style={styles.buttonText}>{props.item.name}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 6,
    paddingBottom: 8,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderRadius: 18,
    marginLeft: 5,
    marginVertical: 10
  },
  buttonText: {
    justifyContent: 'center',
  }
})

export default SkillSectionItem;
