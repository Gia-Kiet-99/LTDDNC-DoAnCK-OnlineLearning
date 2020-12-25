import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {listType} from "../../../globals/constants";
import StudyList from "../../List/StudyList/study-list";
import {CourseContext} from "../../../provider/course-provider";
import PathListHeader from "./PathListHeader/path-list-header";

const PathDetail = (props) => {
  const item = props.route.params.item;
  const {getCourseFromId} = useContext(CourseContext)

  const getCourseList = () => {
    return item.courseIds.map(id => getCourseFromId(id))
  }

  const courses = getCourseList()
  return (
    <View style={styles.container}>
      <StudyList
        kind={listType.pathCourse}
        style={{marginTop: 0}}
        navigation={props.navigation}
        data={courses}
        listHeaderComponent={<PathListHeader data={item}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
})

export default PathDetail;
