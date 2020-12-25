import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Text} from "react-native";
import LessonList from "../../../DetailScreen/CourseDetail/ListLesson/lesson-list";
import CommentList from "../../../DetailScreen/CourseDetail/CommentList/comment-list";

const Tab = createMaterialTopTabNavigator();

// const CommentList = () => {
//   return <Text style={{padding: 15}}>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus ligula, commodo at lacus ut, porta viverra
//     purus. Sed eu ex ac est bibendum dictum eu at eros. Mauris varius imperdiet volutpat. Pellentesque in lacus turpis.
//     Aliquam erat volutpat. Aliquam blandit finibus tristique. Suspendisse potenti. Ut tincidunt elit ut elit dictum, in
//     convallis sem hendrerit. Vivamus quis mi a nisi ultricies elementum. Sed in fringilla justo. Aenean bibendum maximus
//     nunc nec consectetur. Aenean tempus vehicula aliquam. Suspendisse eu nisi feugiat, tristique arcu at, consequat leo.
//     Nulla a maximus mi. Aliquam erat volutpat. Aliquam dui dolor, aliquet in tortor sed, sollicitudin sagittis elit.
//     Morbi vel neque magna. Quisque bibendum vehicula ligula, sit amet aliquet leo aliquam at. Aenean quis hendrerit
//     quam. Aliquam mi ex, luctus ut purus eu, dapibus malesuada magna. Fusce semper vitae elit non facilisis. Interdum et
//     malesuada fames ac ante ipsum primis in faucibus. Vestibulum scelerisque, mi vitae malesuada auctor, nisi lectus
//   </Text>
// }

const LessonTabNavigator = (props) => {
  const courseSection = props.section
  const ratingList = props.ratingList
  const courseId = props.courseId

  return (
    <Tab.Navigator>
      <Tab.Screen name="Contents" component={LessonList}
                  initialParams={{courseSection: courseSection}}/>
      <Tab.Screen name="Reviews" component={CommentList}
                  initialParams={{ratingList: ratingList, courseId: courseId}}/>
    </Tab.Navigator>
  )
};

export default LessonTabNavigator;
