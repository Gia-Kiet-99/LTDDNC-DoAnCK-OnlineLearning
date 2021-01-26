import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {ScreenName} from "../../../../globals/constants";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import Search from "../../../Main/Search/search";

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator initalRouteName={ScreenName.search}>
      <Stack.Screen name={ScreenName.search} component={Search} options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
      <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;
