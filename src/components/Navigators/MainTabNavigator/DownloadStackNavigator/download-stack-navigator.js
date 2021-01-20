import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Download from "../../../Main/Download/download";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import {ScreenName} from "../../../../globals/constants";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import Editing from "../../../AccountManagement/Editing/editing";

const Stack = createStackNavigator()

const DownloadStackNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="Download">
      <Stack.Screen name={ScreenName.download} component={Download} options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
      <Stack.Screen name={ScreenName.setting} component={Setting}/>
      <Stack.Screen name={ScreenName.profile} component={Profile}/>
      <Stack.Screen name={ScreenName.editing} component={Editing}/>
    </Stack.Navigator>
  );
};

export default DownloadStackNavigator;
