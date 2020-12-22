import React, {useContext, useEffect, useState} from 'react';
import {Image, View, ScrollView, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import Section from "../../Common/section";
import {listName, titleName} from "../../../globals/constants";
import ActionBar from "../../Common/action-bar";
import {CourseContext} from "../../../provider/course-provider";
import {ChannelContext} from "../../../provider/channel-provider";
import {apiGetFavoriteCourses} from "../../../core/services/authentication-service";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {apiGetRecommendCourse, apiGetTopRateCourses} from "../../../core/services/course-service";

const Home = (props) => {
  console.log("Home")
  // const {getFavoriteCourses} = useContext(CourseContext)
  // const favoriteCourses = getFavoriteCourses();
  // const {getPublicChannels, getPrivateChannels} = useContext(ChannelContext)
  // const {courseList} = useContext(CourseContext)
  const authContext = useContext(AuthenticationContext)

  const [courseList, setCourseList] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    //get top-rate courses
    apiGetTopRateCourses(10, 1)
      .then((response) => {
        if (response.status === 200) {
          setCourseList(response.data.payload)
        }
      })
      .catch(error => {
        throw new Error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // const renderContinueLearningSection = (favoriteCourses) => {
  //   if (favoriteCourses && favoriteCourses.length > 0) {
  //     return <Section navigation={props.navigation} kind={listName.favoriteCourse}
  //                     title={titleName.continueLearning} list={favoriteCourses}
  //                     showSeeAllButton={true}/>
  //   }
  // }
  // const renderChannelsSection = (channels, title) => {
  //   if (channels && channels.length > 0) {
  //     return <Section navigation={props.navigation} kind={listName.channel}
  //                     title={title} list={channels}
  //                     showSeeAllButton={true}/>
  //   }
  // }
  const renderCourseListSection = (list) => {
    if (list && list.length > 0) {
      return <Section navigation={props.navigation} kind={listName.course}
                      title={'Course list'} list={list}
                      showSeeAllButton={true}/>
    }
  }

  const onPressed = () => {
    console.log("token: ", authContext.state.token)
    apiGetFavoriteCourses(authContext.state.token)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  return <View style={styles.container}>
    {isLoading ? (
      <View style={{justifyContent: 'center', flex: 1}}>
        <ActivityIndicator size="large" color="#2980b9"/>
      </View>
    ) : (
      <View>
        <StatusBar translucent={false} backgroundColor="transparent" barStyle="dark-content"/>
        <ActionBar title={titleName.home} navigation={props.navigation}/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('../../../../assets/image-online-education.jpg')}/>
          </View>

          {/*{renderContinueLearningSection(favoriteCourses)}*/}
          {/*{renderChannelsSection(getPublicChannels(), "Channels")}*/}

          {renderCourseListSection(courseList)}

          {/*{renderChannelsSection(getPrivateChannels(), "My Channels")}*/}

        </ScrollView>
      </View>
    )}
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
  },
  bar: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  textBar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  imageWrapper: {
    height: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  settingIcon: {
    width: 25,
    height: 25,
  },
  listSection: {
    backgroundColor: '#f5f5f5'
  },
})

export default Home;
