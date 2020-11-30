import React, {useState} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import SearchResultList from "./SearchResultList/search-result-list";
import {SceneMap, TabView} from "react-native-tab-view";
import StudyList from "../../List/StudyList/study-list";
import {listName} from "../../../globals/constants";

{/*<SearchResultList/>*/
}
const Search = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: "all", title: "ALL"},
    {key: "courses", title: "COURSES"},
    {key: "paths", title: "PATHS"},
    {key: "authors", title: "AUTHORS"},
  ])

  const CourseRoute = () => {
    return <StudyList kind={listName.course} style={{paddingHorizontal: 15}}/>
  }
  const PathRoute = () => {
    return <StudyList kind={listName.path} style={{paddingHorizontal: 15}}/>
  }
  const AuthorRoute = () => {
    return <StudyList kind={listName.author} style={{paddingHorizontal: 15}}/>
  }

  return (
    <View style={styles.container}>
      {/*<Text> aloalo</Text>*/}
      <TabView style={styles.tabView}
               navigationState={{index, routes}}
               onIndexChange={setIndex}
               renderScene={SceneMap({
                 all: SearchResultList,
                 courses: CourseRoute,
                 paths: PathRoute,
                 authors: AuthorRoute
               })}
               initialLayout={{width: Dimensions.get("window").width}}
        // tabBarPosition="bottom"
      />
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    // flex: 1,
  }
})

export default Search;
