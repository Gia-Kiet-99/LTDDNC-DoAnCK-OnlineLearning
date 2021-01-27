import React from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import SectionListHeader from "../SectionListHeader/section-list-header";

const LessonList = (props) => {
  const onLessonItemPressed = props.route.params?.onLessonItemPressed

  let sections = props.route.params.courseSection
  for (const section of sections) {
    section.data = section.lesson
    delete section.lesson
  }

  // const renderSectionHeader = ({section: {name, sumHours}}) => {
  //   return <SectionListHeader title={name} totalDuration={sumHours}/>
  // }
  // const renderLessonItem = ({item}) => {
  //   return <ListLessonItem key={item.id} item={item}/>
  // }

  return (
    <View style={styles.lessonList}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => <ListLessonItem item={item} onLessonItemPressed={onLessonItemPressed}/>}
        renderSectionHeader={({section: {name, sumHours}}) => (
          <SectionListHeader title={name} totalDuration={sumHours}/>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lessonList: {
    flex: 1
  }
})

export default LessonList;
