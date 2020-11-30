import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SearchResultList from "../../../../Main/Search/SearchResultList/search-result-list";
import StudyList from "../../../../List/StudyList/study-list";
import {listName} from "../../../../../globals/constants";
import {SearchBar} from "react-native-elements";
import {View, StyleSheet} from "react-native";

const Tab = createMaterialTopTabNavigator();

const SearchTabNavigator = (props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar
        platform={"android"}
        placeholder="Search..."
        onChangeText={(search) => setSearchValue(search)}
        value={searchValue}
      />
      <Tab.Navigator initialRouteName="AllResult" keyboardDismissMode={'on-drag'}>
        <Tab.Screen
          name="AllResult"
          component={SearchResultList}
          options={{title: "ALL"}}/>
        <Tab.Screen
          name="CourseResult"
          component={StudyList}
          initialParams={{
            kind: listName.course,
            style: {
              paddingHorizontal: 15
            },
          }}
          options={{title: "COURSES"}}/>
        <Tab.Screen
          name="PathResult"
          component={StudyList}
          initialParams={{
            kind: listName.path,
            style: {
              paddingHorizontal: 15
            },
          }}
          options={{title: "PATHS"}}/>
        <Tab.Screen
          name="AuthorResult"
          component={StudyList}
          initialParams={{
            kind: listName.author,
            style: {
              paddingHorizontal: 15
            },
          }}
          options={{title: "AUTHORS"}}/>
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SearchTabNavigator;
