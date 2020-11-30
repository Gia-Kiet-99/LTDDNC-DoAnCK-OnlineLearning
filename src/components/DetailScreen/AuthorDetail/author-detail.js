import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import StudyList from "../../List/StudyList/study-list";
import {listName} from "../../../globals/constants";
import {CourseContext} from "../../../provider/course-provider";
import AuthorListHeader from "./ListHeader/author-list-header";

const AuthorDetail = (props) => {
  console.log("AuthorDetail")
  const data = props.route?.params?.data;

  const {getCourseFromId} = useContext(CourseContext)

  const getCourses = (ids) => {
    return ids.map(id => getCourseFromId(id))
  }

  const courses = getCourses(data.courseIds)
  return (
    <View style={styles.container}>
      <StudyList
        kind={listName.authorCourse}
        navigation={props.navigation}
        data={courses}
        listHeaderComponent={
          <>
            <AuthorListHeader data={data}/>
          </>
        }/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
})

export default AuthorDetail;
