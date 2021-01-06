import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator, Text} from 'react-native';
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import {apiGetLearningCourse, apiGetNewReleaseCourse, apiGetTopSellCourse} from "../../../core/services/course-service";
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {listType} from "../../../globals/constants";
import LoadIndicator from "../../Common/load-indicator";


const StudyList = (props) => {
  console.log("StudyList")
  const type = props.route.params.type
  let getDataFromApi
  let limit = 10
  let page = 1

  /* Use state */
  const [loading, setLoading] = useState(LOADING)
  const [listData, setListData] = useState([])
  /**
   * canRefreshList is state that show us if there is no course to reach
   * (false when we fetched all course from api)
   * */
  const [canRefreshList, setRefreshList] = useState(false)

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
      default:
        throw new Error()
    }
  }
  const getContinueCourses = () => {
    console.log("getContinueCourses")
    apiGetLearningCourse().then(response => {
      if (response.stack === 200) {
        setListData(listData.concat(response.data.payload))
        setLoading(LOAD_SUCCEEDED)
      } else {
        setLoading(LOAD_FAILED)
      }
    }).catch(err => {
      setLoading(LOAD_FAILED)
      throw new Error()
    }).finally(() => {
      setRefreshList(false)
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
        setRefreshList(false)
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
        setRefreshList(false)
      })
  }
  const loadMoreCourses = () => {
    console.log("onEndReach")
    // setRefreshList(true)
    // page++
    // getDataFromApi()
  }


  // const renderPathItem = ({item}) => (
  //   <PathListItem key={item.id} item={item} navigation={props.navigation}/>
  // )
  // const renderAuthorItem = ({item}) => (
  //   <AuthorListItem key={item.id} item={item} navigation={props.navigation}/>
  // )
  // const renderChannelIem = ({item}) => (
  //   <ChannelListItem key={item.id} item={item} navigation={props.navigation}/>
  // )

  /* render list base on "" */
  // const renderList = () => {
  //     switch () {
  //         case listName.course:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={courseList}
  //                              ListHeaderComponent={listHeaderComponent}
  //                              renderItem={renderCourseItem}
  //                              keyExtractor={(item) => (item.id)}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.channelCourse:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={props.data}
  //                              ListHeaderComponent={listHeaderComponent}
  //                              renderItem={renderCourseItem}
  //                              keyExtractor={(item) => (item.id)}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.favoriteCourse:
  //             let favoriteCourses = getFavoriteCourses()
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={favoriteCourses}
  //                              renderItem={renderCourseItem}
  //                              ListHeaderComponent={listHeaderComponent}
  //                              keyExtractor={(item) => (item.id)}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.pathCourse:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={props.data}
  //                              renderItem={renderCourseItem}
  //                              ListHeaderComponent={listHeaderComponent}
  //                              keyExtractor={(item) => (item.id)}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.authorCourse:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={props.data}
  //                              renderItem={renderCourseItem}
  //                              ListHeaderComponent={listHeaderComponent}
  //                              keyExtractor={(item) => (item.id)}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.download:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={props.data}
  //                              // extraData={downloadedList}
  //                              renderItem={renderCourseItem}
  //                              keyExtractor={item => item.id}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.path:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={paths}
  //                              renderItem={renderPathItem}
  //                              keyExtractor={item => item.id}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.author:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={authors}
  //                              renderItem={renderAuthorItem}
  //                              keyExtractor={item => item.id}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         case listName.channel:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={props.route.params.data}
  //                              ListHeaderComponent={props.listHeaderComponent}
  //                              ListHeaderComponentStyle={props.listHeaderComponentStyle}
  //                              renderItem={renderChannelIem}
  //                              keyExtractor={item => item.id}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //         default:
  //             return <FlatList showsVerticalScrollIndicator={false}
  //                              data={courseList}
  //                              renderItem={renderCourseItem}
  //                              keyExtractor={item => item.id}
  //                              ItemSeparatorComponent={() => <ListItemSeparator/>}/>
  //     }
  // }

  /* Render function */
  const renderCourseItem = ({item}) => (
    <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
  )
  const renderListFooter = () => {
    if (canRefreshList) {
      return <LoadIndicator/>
    } else {
      return <View/>
    }
  }
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
          ListFooterComponent={renderListFooter}
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
