import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SectionSearchResultList from "../../../../Main/Search/SearchResultList/section-search-result-list";
import SearchResultList from "../../../../Main/Search/SearchResultList/search-result-list";
import {listType, TabName} from "../../../../../globals/constants";

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = (props) => {
  return (
    <Tab.Navigator initialRouteName="AllResult">
      <Tab.Screen
        name={TabName.allResult}
        component={SectionSearchResultList}
        initialParams={{data: props.data}}
        options={{title: "ALL"}}/>
      <Tab.Screen
        name={TabName.courseResult}
        component={SearchResultList}
        initialParams={{
          type: listType.course,
          courseData: props.data.courses
        }}
        options={{title: "COURSES"}}/>

      <Tab.Screen
        name={TabName.authorResult}
        component={SearchResultList}
        initialParams={{
          type: listType.author,
          authorData: props.data.instructors
        }}
        options={{title: "AUTHORS"}}/>

    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
