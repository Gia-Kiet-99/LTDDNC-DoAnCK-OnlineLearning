import React from 'react';
import StudyList from "../../../List/StudyList/study-list";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import {createStackNavigator} from "@react-navigation/stack";
import PathDetailStackNavigator from "../BrowseStackNavigator/PathDetailStackNavigator/path-detail-stack-navigator";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";
import {NavigatorName} from "../../../../globals/constants";
import ChannelDetailStackNavigator from "../ChannelDetailStackNavigator/channel-detail-stack-navigator";

const Stack = createStackNavigator();

const ListStack = (props) => {
    return (
        <Stack.Navigator initialRouteName="StudyList" screenOptions={{headerShown: true}}>
            <Stack.Screen name="StudyList" component={StudyList} options={({route}) => ({title: route.params.title})}/>
            <Stack.Screen name="CourseDetailStackNavigator" component={CourseDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name={NavigatorName.channelDetailStack}
                          component={ChannelDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="PathDetailStackNavigator" component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default ListStack;
