import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator, Text} from 'react-native';
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import {apiGetNewReleaseCourse, apiGetTopSellCourse} from "../../../core/services/course-service";
import {LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";
import {listType} from "../../../globals/constants";


const StudyList = (props) => {
  console.log("StudyList")
  const type = props.route.params.type
  let limit = 10
  let page = 1

  /* Use state */
  const [loading, setLoading] = useState(LOADING)
  const [listData, setListData] = useState(null)
  /**
   * canRefreshList is state that show us if there is no course to reach
   * when we fetched all course from api
   * */
  const [canRefreshList, setRefreshList] = useState(true)

  /* Use effect */
  useEffect(() => {
    if (loading === LOADING) {
      switch (type) {
        case listType.newReleaseCourse:
          getNewReleaseCourse(limit, page)
          break
        case listType.topSellCourse:
          getTopSellCourse(limit, page)
          break
        default:
          throw new Error()
      }
    }
  }, [loading])

  /* Function */
  const getNewReleaseCourse = (limit, page) => {
    apiGetNewReleaseCourse(limit, page)
      .then(response => {
        if (response.status === 200) {
          setListData(response.data.payload)
          setLoading(LOAD_SUCCEEDED)
        } else {
          setLoading(LOAD_FAILED)
        }
      })
      .catch(e => {
        setLoading(LOAD_FAILED)
        throw new Error()
      })
  }
  const getTopSellCourse = (limit, page) => {
    apiGetTopSellCourse(limit, page)
      .then(response => {
        if (response.status === 200) {
          setListData(response.data.payload)
          setLoading(LOAD_SUCCEEDED)
        } else {
          setLoading(LOAD_FAILED)
        }
      })
      .catch(e => {
        setLoading(LOAD_FAILED)
        throw new Error()
      })
  }
  const loadMoreCourses = () => {
    // switch (type) {
    //   case listType.newReleaseCourse:
    //     page++
    //     getNewReleaseCourse(limit, page)
    //     break
    //   case listType.topSellCourse:
    //     page++
    //     getTopSellCourse(limit, page)
    //     break
    //   default:
    //     throw new Error()
    // }
    console.log("onEndReach")
  }
  const renderCourseItem = ({item}) => (
    <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
  )

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
  const renderUI = () => {
    switch (loading) {
      case LOADING:
        return <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="#2980b9"/>
        </View>
      case LOAD_SUCCEEDED:
        return <FlatList
          // refreshing={true}
          onEndReachedThreshold={2}
          onEndReached={loadMoreCourses}
          showsVerticalScrollIndicator={false}
          data={listData}
          renderItem={renderCourseItem}
          keyExtractor={(item) => (item.id)}
          ItemSeparatorComponent={() => <ListItemSeparator/>}/>
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
