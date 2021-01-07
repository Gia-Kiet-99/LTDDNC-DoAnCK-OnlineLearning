import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator, Text} from 'react-native';
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import {
  apiGetCoursesByCategory,
  apiGetLearningCourse,
  apiGetNewReleaseCourse,
  apiGetRecommendCourse,
  apiGetTopSellCourse
} from "../../../core/services/course-service";
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {listType} from "../../../globals/constants";
import LearningListItem from "../ListItem/learning-list-item";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import RecommendListItem from "../ListItem/recommend-list-item";


const StudyList = (props) => {
  console.log("StudyList")
  const type = props.route.params.type
  const categoryId = props.route?.params?.categoryId
  let getDataFromApi
  let limit = 100
  let page = 1

  /* Use context */
  const authContext = useContext(AuthenticationContext);

  /* Use state */
  const [loading, setLoading] = useState(LOADING)
  const [listData, setListData] = useState([])
  /**
   * canRefreshList is state that show us if there is no course to reach
   * (false when we fetched all course from api)
   * */
  // const [canRefreshList, setRefreshList] = useState(false)

  /* Use effect */
  useEffect(() => {
    checkListType(type)
    if (loading === LOADING) {
      getDataFromApi()
    }
  }, [loading])

  /* Function */
  const checkListType = (type) => {
    switch (type) {
      case listType.newReleaseCourse:
        // getNewReleaseCourse(limit, page)
        getDataFromApi = getNewReleaseCourse
        break
      case listType.topSellCourse:
        // getTopSellCourse(limit, page)
        getDataFromApi = getTopSellCourse
        break
      case listType.continueCourse:
        getDataFromApi = getContinueCourses
        break
      case listType.recommendCourse:
        getDataFromApi = getRecommendCourses
        break
      case listType.categoryCourses:
        getDataFromApi = getCategoryCourses
        break
      default:
        throw new Error()
    }
  }
  const getCategoryCourses = () => {
    console.log("getCategoryCourses")
    apiGetCoursesByCategory(categoryId).then(response => {
      if (response.status === 200) {
        setListData(listData.concat(response.data.payload.rows))
        setLoading(LOAD_SUCCEEDED)
      } else {
        setLoading(LOAD_FAILED)
      }
    }).catch(err => {
      setLoading(LOAD_FAILED)
      throw new Error()
    }).finally(() => {
      // setRefreshList(false)
    })
  }
  const getRecommendCourses = () => {
    console.log("getRecommendCourses")
    apiGetRecommendCourse(authContext.state.userInfo.id, limit, page).then(response => {
      if (response.status === 200) {
        setListData(listData.concat(response.data.payload))
        setLoading(LOAD_SUCCEEDED)
      } else {
        setLoading(LOAD_FAILED)
      }
    }).catch(err => {
      setLoading(LOAD_FAILED)
      throw new Error()
    }).finally(() => {
      // setRefreshList(false)
    })
  }
  const getContinueCourses = () => {
    console.log("getContinueCourses")
    apiGetLearningCourse().then(response => {
      if (response.status === 200) {
        setListData(listData.concat(response.data.payload))
        setLoading(LOAD_SUCCEEDED)
      } else {
        setLoading(LOAD_FAILED)
      }
    }).catch(err => {
      setLoading(LOAD_FAILED)
      throw new Error()
    }).finally(() => {
      // setRefreshList(false)
    })
  }
  const getNewReleaseCourse = () => {
    console.log("getNewReleaseCourse")
    apiGetNewReleaseCourse(limit, page)
      .then(response => {
        if (response.status === 200) {
          setListData(listData.concat(response.data.payload))
          setLoading(LOAD_SUCCEEDED)
        } else {
          setLoading(LOAD_FAILED)
        }
      })
      .catch(e => {
        setLoading(LOAD_FAILED)
        throw new Error()
      })
      .finally(() => {
        // setRefreshList(false)
      })
  }
  const getTopSellCourse = () => {
    apiGetTopSellCourse(limit, page)
      .then(response => {
        if (response.status === 200) {
          setListData(listData.concat(response.data.payload))
          setLoading(LOAD_SUCCEEDED)
        } else {
          setLoading(LOAD_FAILED)
        }
      })
      .catch(e => {
        setLoading(LOAD_FAILED)
        throw new Error()
      })
      .finally(() => {
        // setRefreshList(false)
      })
  }
  const loadMoreCourses = () => {
    console.log("onEndReach")
    // setRefreshList(true)
    // page++
    // checkListType(type);
    // console.log("Limit: ", limit)
    // console.log("Page: ", page)
    // console.log("getDataFromApi: ", getDataFromApi);
    // getDataFromApi()
  }

  /* Render function */
  const renderCourseItem = ({item}) => {
    switch (type) {
      case listType.continueCourse:
        return <LearningListItem key={item.id} item={item} navigation={props.navigation}/>
      case listType.recommendCourse:
        return <RecommendListItem key={item.id} item={item} navigation={props.navigation}/>
      default:
        return <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
    }
  }
  // const renderListFooter = () => {
  //   if (canRefreshList) {
  //     return <LoadIndicator/>
  //   } else {
  //     return <View/>
  //   }
  // }
  const renderUI = () => {
    switch (loading) {
      case LOADING:
        return <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#2980b9"/>
        </View>
      case LOAD_SUCCEEDED:
        return <FlatList
          // refreshing={false}
          // onRefresh={getDataFromApi}
          onEndReachedThreshold={0}
          onEndReached={loadMoreCourses}
          showsVerticalScrollIndicator={false}
          data={listData}
          renderItem={renderCourseItem}
          keyExtractor={(item) => (item.id)}
          // ListFooterComponent={renderListFooter}
          ItemSeparatorComponent={ListItemSeparator}/>
      case LOAD_FAILED:
        return <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
          <Text>Oops... Something went wrong</Text>
        </View>
    }
  }

  return <View style={styles.container}>
    {renderUI()}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  }
})

export default StudyList;
