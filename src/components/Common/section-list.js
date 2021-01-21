import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import PathsSectionItem from "../Main/Browse/PathsSectionItem/paths-section-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSectionItem from "../Main/Browse/AuthorSectionItem/author-section-item";
import ChannelSectionItem from "../Main/Home/ChannelSectionItem/channel-section-item";
import {listType} from "../../globals/constants";
import SkillSectionItem from "../Main/Browse/SkillSectionItem/skill-section-item";
import {AuthenticationContext} from "../../provider/authentication-provider";
import {
  apiGetAuthorList,
  apiGetCategoryList, apiGetCourseDetailByIds, apiGetFavoriteCourses,
  apiGetLearningCourse,
  apiGetRecommendCourse,
} from "../../core/services/course-service";
import {ListContext} from "../../provider/list-provider";
import LearningSectionItem from "../Main/Home/SectionCoursesItem/learning-section-item";
import FavoriteSectionItem from "../Main/Home/SectionCoursesItem/favorite-section-item";

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
    if (isLoading) {
      switch (props.kind) {
        case listType.continueCourse:
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
        case listType.recommendCourse:
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
          break
        case listType.author:
          apiGetAuthorList()
            .then(response => {
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
          break
        case listType.popularSkill:
          apiGetCategoryList()
            .then(response => {
              if (response.status === 200) {
                setListData(response.data.payload)
              }
            })
            .catch(e => {
              throw new Error(error)
            })
            .finally(() => {
              setLoading(false)
            })
          break
        case listType.favoriteCourse:
          getFavoriteCourses()
          break
        default:
          throw new Error("invalid list kind")
      }
    }
  }, [listContext.shouldUpdateList, isLoading])

  /* Internal function */
  const getFavoriteDetail = (rawFavoriteList) => {
    let list = []
    for (let i = 0; i < rawFavoriteList.length; i++) {
      apiGetCourseDetailByIds(rawFavoriteList[i].id, state.userInfo.id).then(r => {
        if (r.status === 200) {
          console.log("OKE")
          list.push(r.data.payload)
        }
      }).catch(e => {
        console.error(e)
      }).finally(() => {
        if (i === rawFavoriteList.length - 1) {
          setListData(list)
          setLoading(false)
        }
      })
    }
  }
  const getFavoriteCourses = () => {
    apiGetFavoriteCourses().then(response => {
      if (response.status === 200) {
        getFavoriteDetail(response.data.payload)
      }
    }).catch(e => {
      console.error(e)
    })
  }

  /* Render list item */
  const renderListItem = ({item}) => {
    switch (props.kind) {
      case listType.path:
        return <PathsSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.course:
      case listType.continueCourse:
        return <LearningSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.recommendCourse:
        return <SectionCoursesItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.author:
        return <AuthorSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.channel:
        return <ChannelSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.popularSkill:
        return <SkillSectionItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.favoriteCourse:
        return <FavoriteSectionItem key={item.id} item={item} navigation={props.navigation}/>
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
