import React from 'react';
import Home from "../../../Main/Home/home";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import ListStack from "../ListStack/list-stack";
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";
import {NavigatorName, ScreenName} from "../../../../globals/constants";
import ChannelDetailStackNavigator from "../ChannelDetailStackNavigator/channel-detail-stack-navigator";

const Stack = createStackNavigator();
const HomeStackNavigator = (props) => {
  return (
    <Stack.Navigator initalRouteName={Home}>
      <Stack.Screen name={ScreenName.home} component={Home} options={{headerShown: false}}/>
      <Stack.Screen name={NavigatorName.courseDetailStack} component={CourseDetailStackNavigator}
                    options={{headerShown: false}}/>
      <Stack.Screen name={NavigatorName.channelDetailStack}
                    component={ChannelDetailStackNavigator}
                    options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.setting} component={Setting}/>
      <Stack.Screen name={ScreenName.profile} component={Profile}/>
      <Stack.Screen name={NavigatorName.listStack} component={ListStack} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
