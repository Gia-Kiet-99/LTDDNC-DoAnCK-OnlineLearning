import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import LessonList from "../../../DetailScreen/CourseDetail/ListLesson/lesson-list";
import CommentList from "../../../DetailScreen/CourseDetail/CommentList/comment-list";

const Tab = createMaterialTopTabNavigator();

const LessonTabNavigator = (props) => {
  const courseSection = props.section
  const ratingList = props.ratingList
  const courseId = props.courseId
  const onLessonItemPressed = props.onLessonItemPressed

  return (
    <Tab.Navigator>
      <Tab.Screen name="Contents" component={LessonList}
                  initialParams={{courseSection: courseSection, onLessonItemPressed: onLessonItemPressed}}/>
      <Tab.Screen name="Reviews" component={CommentList}
                  initialParams={{ratingList: ratingList, courseId: courseId}}/>
    </Tab.Navigator>
  )
};

export default LessonTabNavigator;
