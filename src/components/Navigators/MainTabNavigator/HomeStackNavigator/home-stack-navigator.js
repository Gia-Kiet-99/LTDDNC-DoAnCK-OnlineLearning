import React from 'react';
import Home from "../../../Main/Home/home";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import {createStackNavigator} from "@react-navigation/stack";
import {ScreenName} from "../../../../globals/constants";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import StudyList from "../../../List/StudyList/study-list";
import Editing from "../../../AccountManagement/Editing/editing";
import ChangePassword from "../../../AccountManagement/ChangePassword/change-password";

const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    // <ListProvider>
      <Stack.Navigator initalRouteName={Home}>
        <Stack.Screen name={ScreenName.home} component={Home} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.channelDetail} component={ChannelDetail} options={{headerShown: true}}/>
        <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
        <Stack.Screen name={ScreenName.studyList} component={StudyList} options={
          ({route}) => ({title: route.params.title})}/>
        <Stack.Screen name={ScreenName.setting} component={Setting}/>
        <Stack.Screen name={ScreenName.profile} component={Profile}/>
        <Stack.Screen name={ScreenName.editing} component={Editing} options={{title: "Update account"}}/>
        <Stack.Screen name={ScreenName.changePassword} component={ChangePassword} options={{title: "Change password"}}/>
      </Stack.Navigator>
    // </ListProvider>
  );
};

export default HomeStackNavigator;
