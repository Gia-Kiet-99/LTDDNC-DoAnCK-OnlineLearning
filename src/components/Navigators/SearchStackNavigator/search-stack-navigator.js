import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import SearchTabNavigator from "./SearchTabNavigator/search-tab-navigator";
import CourseDetail from "../../DetailScreen/CourseDetail/course-detail";
import PathDetailStackNavigator
    from "../MainTabNavigator/BrowseStackNavigator/PathDetailStackNavigator/path-detail-stack-navigator";
import AuthorDetailStackNavigator from "../MainTabNavigator/AuthorDetailStackNavigator/author-detail-stack-navigator";

const Stack = createStackNavigator();

const SearchStackNavigator = (props) => {
    return (
        <Stack.Navigator initalRouteName="SearchTabNavigator">
            <Stack.Screen name="SearchTabNavigator" component={SearchTabNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="CourseDetail" component={CourseDetail}
                          options={{headerShown: false}}/>
            <Stack.Screen name="PathDetailStackNavigator" component={PathDetailStackNavigator}
                          options={{headerShown: false}}/>
            <Stack.Screen name="AuthorDetailStackNavigator" component={AuthorDetailStackNavigator}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default SearchStackNavigator;
