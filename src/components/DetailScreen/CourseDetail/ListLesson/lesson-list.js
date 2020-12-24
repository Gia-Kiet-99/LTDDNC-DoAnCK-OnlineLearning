import React, {useContext} from 'react';
import {FlatList, SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import SectionListHeader from "../SectionListHeader/section-list-header";
import {lessons} from "../../../../localize/data";

const LessonList = (props) => {
  // const {item} = useContext(CourseDetailContext)
  // console.log("LessonList", item)
  let sections = props.route.params.courseSection
  for (const section of sections) {
    section.data = section.lesson
    delete section.lesson
  }

  // console.log("Course section: ", props.route.params.courseSection)
  const renderSectionHeader = ({section: {name, sumHours}}) => {
    return <SectionListHeader title={name} totalDuration={sumHours}/>
  }
  const renderLessonItem = ({item}) => {
    return <ListLessonItem key={item.id} item={item}/>
  }

  return (
    <View style={styles.lessonList}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({item}) => <ListLessonItem item={item}/>}
        renderSectionHeader={({section: {name, sumHours}}) => (
          <SectionListHeader title={name} totalDuration={sumHours}/>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        showsVerticalScrollIndicator={false}
      />

      {/*<SectionList*/}
      {/*  sections={lessons}*/}
      {/*  keyExtractor={(item, index) => item.id + index}*/}
      {/*  renderItem={({item}) => <ListLessonItem key={item.id} item={item}/>}*/}
      {/*  renderSectionHeader={({section: {title, totalDuration}}) => (*/}
      {/*    <SectionListHeader title={title} totalDuration={totalDuration}/>*/}
      {/*  )}*/}
      {/*  ItemSeparatorComponent={ListItemSeparator}*/}
      {/*  // showsVerticalScrollIndicator={false}*/}
      {/*/>*/}

      {/*<FlatList*/}
      {/*  data={courseSection[0].lesson}*/}
      {/*  keyExtractor={item => item.id}*/}
      {/*  renderItem={({item}) => <Text>{item.name}</Text>}/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  lessonList: {
    flex: 1,
    // height: 200,
    // backgroundColor: 'red'
  }
})

export default LessonList;
