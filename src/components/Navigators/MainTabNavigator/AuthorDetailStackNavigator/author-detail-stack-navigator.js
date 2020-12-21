import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";
import {NavigatorName, ScreenName} from "../../../../globals/constants";

const Stack = createStackNavigator();

const AuthorDetailStackNavigator = (props) => {
    // return (
    //     <Stack.Navigator initial={ScreenName.authorDetail}>
    //         <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
    //         <Stack.Screen name={NavigatorName.courseDetailStack} component={CourseDetailStackNavigator} options={{headerShown: false}}/>
    //     </Stack.Navigator>
    // );
};

export default AuthorDetailStackNavigator;
