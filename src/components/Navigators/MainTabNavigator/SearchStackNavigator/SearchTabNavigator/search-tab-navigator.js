import React, {useReducer, useState} from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {SearchBar} from "react-native-elements";
import {View, StyleSheet, Alert} from "react-native";
import {INITIAL_LOAD_STATE} from "../../../../../core/configuration/loading-config";
import SearchHistoryList from "../../../../Main/Search/SearchHistoryList/search-history-list";
import searchReducer from "../../../../../reducer/search-reducer";

const Tab = createMaterialTopTabNavigator();

export const initialSearchState = {
  // loading: INITIAL_LOAD_STATE,
  // keyword: "",
  searchHistory: [],
  searchResult: []
}
const SHOW_HISTORY = "SHOW_HISTORY"
const SHOW_RESULT = "SHOW_RESULT"
const SHOW_LOADING = "SHOW_LOADING"

const SearchTabNavigator = (props) => {
  console.log("SearchTabNavigator")

  /* Use state */
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState(SHOW_HISTORY)

  // const [searchHistory, setSearchHistory] = useState([])
  const [searchResult, setSearchResult] = useState([])

  // const [searchState, dispatch] = useReducer(searchReducer, initialSearchState)

  const handleSubmitPressed = () => {
    Alert.alert("Search", keyword)
  }
  const onSearchFocus = () => {
    // Alert.alert("Search")
    // apiGetSearchHistory().then(response => {
    //   if (response.status === 200) {
    //     dispatch({type: SUCCESS, data: response.data.payload})
    //   }
    // }).catch(e => {
    //   console.log("Error: ", e)
    // })
    // await getSearchHistory(dispatch)
  }
  const renderUI = () => {
    switch (status) {
      case SHOW_HISTORY:
        return <SearchHistoryList/>
      case SHOW_RESULT:
        return
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        platform="android"
        placeholder="Search..."
        onChangeText={(keyword) => setKeyword(keyword)}
        value={keyword}
        returnKeyType="search"
        onSubmitEditing={handleSubmitPressed}
        autoFocus={true}
        onFocus={onSearchFocus}
      />

      {renderUI()}
      {/*<Tab.Navigator initialRouteName="AllResult" >*/}
      {/*<Tab.Screen*/}
      {/*  name="AllResult"*/}
      {/*  component={SearchResultList}*/}
      {/*  options={{title: "ALL"}}/>*/}
      {/*<Tab.Screen*/}
      {/*  name="CourseResult"*/}
      {/*  component={StudyList}*/}
      {/*  initialParams={{*/}
      {/*    kind: listType.course,*/}
      {/*    style: {*/}
      {/*      paddingHorizontal: 15*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  options={{title: "COURSES"}}/>*/}
      {/*<Tab.Screen*/}
      {/*  name="PathResult"*/}
      {/*  component={StudyList}*/}
      {/*  initialParams={{*/}
      {/*    kind: listType.path,*/}
      {/*    style: {*/}
      {/*      paddingHorizontal: 15*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  options={{title: "PATHS"}}/>*/}
      {/*<Tab.Screen*/}
      {/*  name="AuthorResult"*/}
      {/*  component={StudyList}*/}
      {/*  initialParams={{*/}
      {/*    kind: listType.author,*/}
      {/*    style: {*/}
      {/*      paddingHorizontal: 15*/}
      {/*    },*/}
      {/*  }}*/}
      {/*  options={{title: "AUTHORS"}}/>*/}
      {/*</Tab.Navigator>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  historyItem: {}
})

export default SearchTabNavigator;
