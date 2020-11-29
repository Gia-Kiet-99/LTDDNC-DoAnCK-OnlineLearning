import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigatorName, ScreenName} from "../../../../globals/constants";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";

const Stack = createStackNavigator()

const ChannelDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.channelDetail}>
            <Stack.Screen
                name={ScreenName.channelDetail}
                component={ChannelDetail}/>
            <Stack.Screen
                name={NavigatorName.courseDetailStack}
                component={CourseDetailStackNavigator}
                options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default ChannelDetailStackNavigator;
