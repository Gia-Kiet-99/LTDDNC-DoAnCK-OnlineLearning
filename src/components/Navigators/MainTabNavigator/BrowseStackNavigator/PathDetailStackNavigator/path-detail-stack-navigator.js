import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import PathDetail from "../../../../DetailScreen/PathDetail/path-detail";
import CourseDetail from "../../../../DetailScreen/CourseDetail/course-detail";

const Stack = createStackNavigator();

const PathDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="PathDetail">
            <Stack.Screen name="PathDetail" component={PathDetail} options={({route}) => ({title: route.params.item.title})}/>
            <Stack.Screen name="CourseDetail" component={CourseDetail} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default PathDetailStackNavigator;
