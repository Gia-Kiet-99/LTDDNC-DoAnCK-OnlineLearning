import React from "react";
import {StyleSheet, Text, View, SafeAreaView, SectionList, TouchableOpacity} from "react-native";
import CourseListItem from "../../../List/ListItem/course-list-item";
import AuthorListItem from "../../../List/ListItem/author-list-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import {TabName, titleName} from "../../../../globals/constants";

const SectionSearchResultList = (props) => {

  const data = props.route.params.data
  const results = [{...data.courses, title: titleName.course}, {...data.instructors, title: titleName.author}]

  const showResultDetail = (title) => {
    switch (title) {
      case titleName.course:
        return props.navigation.navigate(TabName.courseResult);
      case titleName.author:
        return props.navigation.navigate(TabName.authorResult);
      default:
        return props.navigation.navigate(TabName.courseResult);
    }
  }

  const SectionHeader = (props) => (
    <View style={styles.header}>
      <Text style={{fontSize: 16}}>{props.title}</Text>
      <TouchableOpacity onPress={() => showResultDetail(props.title)}>
        <Text style={styles.header}>{`${props.count} Results >`}</Text>
      </TouchableOpacity>
    </View>
  )

  const renderSectionHeader = ({section: {title, totalInPage}}) => {
    return <SectionHeader title={title} count={totalInPage}/>
  }
  const renderSectionListItem = ({item, section: {title}}) => {
    switch (title) {
      case titleName.course:
        return <CourseListItem item={item} navigation={props.navigation}/>
      case titleName.author:
        return <AuthorListItem item={item} navigation={props.navigation}/>
      default:
        return <CourseListItem item={item} navigation={props.navigation} style={{paddingHorizontal: 15}}/>
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={results}
        keyExtractor={(item, index) => item + index}
        renderItem={renderSectionListItem}
        renderSectionHeader={renderSectionHeader}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={ListItemSeparator}
        SectionSeparatorComponent={ListItemSeparator}
        // stickySectionHeadersEnabled={true}
      />
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

export default SectionSearchResultList;
