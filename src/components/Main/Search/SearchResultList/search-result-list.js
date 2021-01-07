import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native'
import CourseListItem from "../../../List/ListItem/course-list-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import {listType} from "../../../../globals/constants";
import AuthorListItem from "../../../List/ListItem/author-list-item";

function SearchResultList(props) {

  const courseData = props.route.params.courseData
  const authorData = props.route.params.authorData

  const results = (courseData !== undefined) ? courseData : authorData

  const type = props.route.params.type

  const renderListItem = ({item}) => {
    switch (type) {
      case listType.course:
        return <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.author:
        return <AuthorListItem key={item.id} item={item} navigation={props.navigation}/>
      default:
        console.log("Error SearchResultList/renderListItem: type value not found")
    }
  }

  return <View style={styles.container}>
    <Text style={styles.text}>{`${results.totalInPage} Results`}</Text>
    <FlatList
      data={results.data}
      renderItem={renderListItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ListItemSeparator}
      showsVerticalScrollIndicator={false}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15
  },
  text: {
    paddingVertical: 20
  }
})

export default SearchResultList;