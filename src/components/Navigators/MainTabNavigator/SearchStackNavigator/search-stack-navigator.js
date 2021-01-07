import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchTabNavigator from "./SearchTabNavigator/search-tab-navigator";
import {NavigatorName, ScreenName} from "../../../../globals/constants";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";

const Stack = createStackNavigator();

const SearchStackNavigator = (props) => {
  return (
    <Stack.Navigator initalRouteName={NavigatorName.searchTab}>
      <Stack.Screen
        name={NavigatorName.searchTab}
        component={SearchTabNavigator}
        options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
      {/*<Stack.Screen*/}
      {/*  name={NavigatorName.pathDetailStack}*/}
      {/*  component={PathDetailStackNavigator}*/}
      {/*  options={{headerShown: false}}/>*/}
      {/*<Stack.Screen*/}
      {/*  name={NavigatorName.authorDetailStack}*/}
      {/*  component={AuthorDetailStackNavigator}*/}
      {/*  options={{headerShown: false}}/>*/}
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
