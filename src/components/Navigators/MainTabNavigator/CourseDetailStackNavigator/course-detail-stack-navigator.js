import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";
import {NavigatorName, ScreenName} from "../../../../globals/constants";

const Stack = createStackNavigator();

const CourseDetailStackNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.courseDetail}>
            <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
            <Stack.Screen name={NavigatorName.authorDetailStack} component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default CourseDetailStackNavigator;
