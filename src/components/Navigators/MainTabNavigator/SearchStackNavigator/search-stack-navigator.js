import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchTabNavigator from "./SearchTabNavigator/search-tab-navigator";
import PathDetailStackNavigator from "../BrowseStackNavigator/PathDetailStackNavigator/path-detail-stack-navigator";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";
import CourseDetailStackNavigator from "../CourseDetailStackNavigator/course-detail-stack-navigator";
import {NavigatorName} from "../../../../globals/constants";

const Stack = createStackNavigator();

const SearchStackNavigator = (props) => {
  return (
    <Stack.Navigator initalRouteName={NavigatorName.searchTab}>
      <Stack.Screen
        name={NavigatorName.searchTab}
        component={SearchTabNavigator}
        options={{headerShown: false}}/>
      <Stack.Screen
        name={NavigatorName.courseDetailStack}
        component={CourseDetailStackNavigator}
        options={{headerShown: false}}/>
      <Stack.Screen
        name={NavigatorName.pathDetailStack}
        component={PathDetailStackNavigator}
        options={{headerShown: false}}/>
      <Stack.Screen
        name={NavigatorName.authorDetailStack}
        component={AuthorDetailStackNavigator}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
