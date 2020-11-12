import React from 'react';
import StudyList from "../../../List/StudyList/study-list";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import ChannelDetail from "../../../DetailScreen/ChannelDetail/channel-detail";
import {createStackNavigator} from "@react-navigation/stack";
import PathDetail from "../../../DetailScreen/PathDetail/path-detail";
import PathDetailStackNavigator from "../PathDetailStackNavigator/path-detail-stack-navigator";

const Stack = createStackNavigator();

const ListStack = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="StudyList"
            screenOptions={{headerShown: true}}>
            <Stack.Screen name="StudyList"
                          component={StudyList}
                          options={({route}) => ({ title: route.params.title })}/>
            <Stack.Screen name="CourseDetail"
                          component={CourseDetail}
                          options={{headerShown: false}}/>
            <Stack.Screen name="ChannelDetail"
                          component={ChannelDetail}
                          options={({route}) => ({ title: route.params.item.title })}/>
            <Stack.Screen name="PathDetailStackNavigator"
                          component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default ListStack;
