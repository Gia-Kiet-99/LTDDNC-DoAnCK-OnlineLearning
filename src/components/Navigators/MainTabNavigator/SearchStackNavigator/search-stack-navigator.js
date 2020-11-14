import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchTabNavigator from "./SearchTabNavigator/search-tab-navigator";
import PathDetailStackNavigator from "../BrowseStackNavigator/PathDetailStackNavigator/path-detail-stack-navigator";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";

const Stack = createStackNavigator();

const SearchStackNavigator = (props) => {
    return (
        <Stack.Navigator initalRouteName="SearchTabNavigator">
            <Stack.Screen name="SearchTabNavigator" component={SearchTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="CourseDetailStackNavigator" component={CourseDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="PathDetailStackNavigator" component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="AuthorDetailStackNavigator" component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
