import React, {createContext, useContext, useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import PathsSectionItem from "../Main/Browse/PathsSectionItem/paths-section-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSectionItem from "../Main/Browse/AuthorSectionItem/author-section-item";
import ChannelSectionItem from "../Main/Home/ChannelSectionItem/channel-section-item";
import {listName} from "../../globals/constants";
import SkillSectionItem from "../Main/Browse/SkillSectionItem/skill-section-item";
import {AuthenticationContext} from "../../provider/authentication-provider";
import {
  apiGetCourseInfo,
  apiGetLearningCourse,
  apiGetRecommendCourse,
  apiGetTopRateCourses
} from "../../core/services/course-service";
import {ListContext} from "../../provider/list-provider";

const SectionList = (props) => {
  /* Use context */
  const {state} = useContext(AuthenticationContext)

  /* Use state */
  const [listData, setListData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  /**
   * shouldUpdateList is state of SectionListContext: it tells us whether continue learning list should update
   * */
  const listContext = useContext(ListContext)

  /* Use effect */
  useEffect(() => {
    switch (props.kind) {
      case listName.continueCourse:
        apiGetLearningCourse()
          .then((response) => {
            if (response.status === 200) {
              setListData(response.data.payload)
            }
          })
          .catch(error => {
            throw new Error(error)
          })
          .finally(() => {
            setLoading(false)
          })
        break;
      case listName.recommendCourse:
        apiGetRecommendCourse(state.userInfo.id, 20, 1)
          .then((response) => {
            if (response.status === 200) {
              // console.log("Recommend courses: ", response.data.payload)
              setListData(response.data.payload)
            }
          })
          .catch(error => {
            throw new Error(error)
          })
          .finally(() => {
            setLoading(false)
          })
        break;
      default:
        throw new Error("invalid list kind")
    }
    //get top-rate courses

  }, [listContext.shouldUpdateList])

  /* Render list item */
  const renderListItem = ({item}) => {
    switch (props.kind) {
      case listName.path:
        return <PathsSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listName.course:
      case listName.favoriteCourse:
      case listName.continueCourse:
      case listName.recommendCourse:
        return <SectionCoursesItem key={item.id} item={item} navigation={props.navigation}/>
      case listName.author:
        return <AuthorSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listName.channel:
        return <ChannelSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listName.popularSkill:
        return <SkillSectionItem key={item.id} item={item} navigation={props.navigation}/>
    }
  }

  return <View style={styles.container}>
      {isLoading ? (
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#2980b9"/>
        </View>
      ) : (
        <FlatList
          data={listData}
          renderItem={renderListItem}
          horizontal={true}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}/>
      )}
    </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5
  }
})

export default SectionList;
