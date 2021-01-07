import React from "react";
import {StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity} from "react-native";
import CourseListItem from "../../../List/ListItem/course-list-item";
import PathListItem from "../../../List/ListItem/path-list-item";
import AuthorListItem from "../../../List/ListItem/author-list-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import {results} from "../../../../localize/data";

const SearchResultList = (props) => {

  const showResultDetail = (title) => {
    // if (props.navigation !== undefined) {
    //   switch (title) {
    //     case 'Courses':
    //       return props.navigation.navigate("CourseResult");
    //     case 'Paths':
    //       return props.navigation.navigate("PathResult");
    //     case 'Authors':
    //       return props.navigation.navigate("AuthorResult");
    //     default:
    //       return props.navigation.navigate("AuthorResult");
    //   }
    // }
  }

  const SectionHeader = (props) => (
    <View style={styles.header}>
      <Text style={{fontSize: 22}}>{props.title}</Text>
      <TouchableOpacity onPress={() => showResultDetail(props.title)}>
        <Text style={styles.header}>{`${props.count} Results >`}</Text>
      </TouchableOpacity>
    </View>
  )

  const renderSectionHeader = ({section: {title, count}}) => {
    return <SectionHeader title={title} count={count}/>
  }
  const renderSectionListItem = ({item, section: {title}}) => {
    switch (title) {
      case 'Courses':
        return <CourseListItem item={item} navigation={props.navigation}/>
      case 'Paths':
        return <PathListItem item={item} navigation={props.navigation}/>
      case 'Authors':
        return <AuthorListItem item={item} navigation={props.navigation}/>
      default:
        return <CourseListItem item={item} navigation={props.navigation} style={{paddingHorizontal: 15}}/>
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*<SectionList*/}
      {/*  sections={results}*/}
      {/*  keyExtractor={(item, index) => item + index}*/}
      {/*  renderItem={renderSectionListItem}*/}
      {/*  renderSectionHeader={renderSectionHeader}*/}
      {/*  showsVerticalScrollIndicator={false}*/}
      {/*  ItemSeparatorComponent={() => <ListItemSeparator/>}*/}
      {/*  SectionSeparatorComponent={() => <ListItemSeparator/>}*/}
      {/*  // stickySectionHeadersEnabled={true}*/}
      {/*/>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 15,
    // marginHorizontal: 15,
    paddingHorizontal: 15
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white'
  },
});

export default SearchResultList;
