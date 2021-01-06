import React from 'react';
import Home from "../../../Main/Home/home";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import ListStack from "../ListStack/list-stack";
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";
import {NavigatorName, ScreenName} from "../../../../globals/constants";
import ChannelDetailStackNavigator from "../ChannelDetailStackNavigator/channel-detail-stack-navigator";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import ListProvider from "../../../../provider/list-provider";
import StudyList from "../../../List/StudyList/study-list";

const Stack = createStackNavigator();
const HomeStackNavigator = (props) => {
  return (
    <ListProvider>
      <Stack.Navigator initalRouteName={Home}>
        <Stack.Screen name={ScreenName.home} component={Home} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.channelDetail} component={ChannelDetail} options={{headerShown: true}}/>
        <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
        {/*<Stack.Screen name={NavigatorName.listStack} component={ListStack} options={{headerShown: false}}/>*/}
        <Stack.Screen name={ScreenName.studyList} component={StudyList} options={
          ({route}) => ({title: route.params.title})}/>
        <Stack.Screen name={ScreenName.setting} component={Setting}/>
        <Stack.Screen name={ScreenName.profile} component={Profile}/>
      </Stack.Navigator>
    </ListProvider>
  );
};

export default HomeStackNavigator;
