import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";

const Stack = createStackNavigator();

const AuthorDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initial="AuthorDetail">
            <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={{title: "Author"}}/>
            <Stack.Screen name="CourseDetailStackNavigator" component={CourseDetailStackNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default AuthorDetailStackNavigator;
