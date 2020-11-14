import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";

const Stack = createStackNavigator();

const CourseDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName="CourseDetail">
            <Stack.Screen name="CourseDetail"
                          component={CourseDetail}
                          options={{headerShown: false}}/>
            <Stack.Screen name="AuthorDetailStackNavigator"
                          component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default CourseDetailStackNavigator;
