import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import SearchHistoryList from "./SearchHistoryList/search-history-list";
import {SearchBar} from "react-native-elements";
import SearchTabNavigator
  from "../../Navigators/MainTabNavigator/SearchStackNavigator/SearchTabNavigator/search-tab-navigator";
import LoadIndicator from "../../Common/load-indicator";
import {apiGetSearchResultV2} from "../../../core/services/search-service";


const SHOW_HISTORY = "SHOW_HISTORY"
const SHOW_RESULT = "SHOW_RESULT"
const SHOW_LOADING = "SHOW_LOADING"
const SHOW_ERROR = "SHOW_ERROR"

const Search = () => {
  console.log("Search")

  /* Use state */
  const [keyword, setKeyword] = useState("");
  const [status, setStatus] = useState(SHOW_HISTORY)
  const [searchResult, setSearchResult] = useState([])

  /* Use effect */
  useEffect(() => {
    if (status === SHOW_LOADING) {
      //call api to get search result
      apiGetSearchResultV2(keyword).then(response => {
        console.log("Search Result: ", response.data.payload)
        if (response.status === 200) {
          setSearchResult(response.data.payload)
          setStatus(SHOW_RESULT)
        } else {
          setStatus(SHOW_ERROR)
        }
      }).catch(e => {
        console.log("Error Search/apiGetSearchResultV2: ", e)
        setStatus(SHOW_ERROR)
      })
    }
  }, [status])

  const handleSubmitKeyword = () => {
    setStatus(SHOW_LOADING)
  }
  const onHistoryItemPressed = (keyword) => {
    setKeyword(keyword)
    handleSubmitKeyword()
  }
  const onSearchFocus = () => {
    setStatus(SHOW_HISTORY)
  }
  const renderUI = () => {
    switch (status) {
      case SHOW_HISTORY:
        return <SearchHistoryList onHistoryItemPressed={onHistoryItemPressed}/>
      case SHOW_RESULT:
        return <SearchTabNavigator data={searchResult}/>
      case SHOW_LOADING:
        return <LoadIndicator/>
      default:
        throw new Error()
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
        onSubmitEditing={handleSubmitKeyword}
        autoFocus={true}
        onFocus={onSearchFocus}
      />
      {renderUI()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    // flex: 1,
  }
})

export default Search;


// const Search = (props) => {
//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     {key: "all", title: "ALL"},
//     {key: "courses", title: "COURSES"},
//     {key: "paths", title: "PATHS"},
//     {key: "authors", title: "AUTHORS"},
//   ])
//
//   const CourseRoute = () => {
//     return <StudyList kind={listType.course} style={{paddingHorizontal: 15}}/>
//   }
//   const PathRoute = () => {
//     return <StudyList kind={listType.path} style={{paddingHorizontal: 15}}/>
//   }
//   const AuthorRoute = () => {
//     return <StudyList kind={listType.author} style={{paddingHorizontal: 15}}/>
//   }
//
//   return (
//     <View style={styles.container}>
//       {/*<Text> aloalo</Text>*/}
//       <TabView style={styles.tabView}
//                navigationState={{index, routes}}
//                onIndexChange={setIndex}
//                renderScene={SceneMap({
//                  all: SearchResultList,
//                  courses: CourseRoute,
//                  paths: PathRoute,
//                  authors: AuthorRoute
//                })}
//                initialLayout={{width: Dimensions.get("window").width}}
//         // tabBarPosition="bottom"
//       />
//     </View>
//   )
//
// };
