import React, {useContext} from 'react';
import {Image, View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Section from "../../Common/section";
import {listName, titleName} from "../../../globals/constants";
import ActionBar from "../../Common/action-bar";
import {CourseContext} from "../../../provider/course-provider";
import {ChannelContext} from "../../../provider/channel-provider";

const Home = (props) => {
  console.log("Home")
  const {getFavoriteCourses} = useContext(CourseContext)
  const favoriteCourses = getFavoriteCourses();
  const {getPublicChannels, getPrivateChannels} = useContext(ChannelContext)
  const {courseList} = useContext(CourseContext)

  // const authContext = useContext(AuthenticationContext)

  const renderContinueLearningSection = (favoriteCourses) => {
    if (favoriteCourses && favoriteCourses.length > 0) {
      return <Section navigation={props.navigation} kind={listName.favoriteCourse}
                      title={titleName.continueLearning} list={favoriteCourses}
                      showSeeAllButton={true}/>
    }
  }
  const renderChannelsSection = (channels, title) => {
    if (channels && channels.length > 0) {
      return <Section navigation={props.navigation} kind={listName.channel}
                      title={title} list={channels}
                      showSeeAllButton={true}/>
    }
  }
  const renderCourseListSection = (list) => {
    if (list && list.length > 0) {
      return <Section navigation={props.navigation} kind={listName.course}
                      title={'Course list'} list={list}
                      showSeeAllButton={true}/>
    }
  }

  // const onPressed = () => {
  //   console.log("token: ", authContext.state.token)
  //
  //   apiGetFavoriteCourses(authContext.state.token)
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  //     .catch((error) => {
  //       throw new Error(error)
  //     })
  // }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor="transparent" barStyle="dark-content"/>
      <ActionBar title={titleName.home} navigation={props.navigation}/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('../../../../assets/image-online-education.jpg')}/>
        </View>

        {renderContinueLearningSection(favoriteCourses)}
        {renderChannelsSection(getPublicChannels(), "Channels")}
        {renderCourseListSection(courseList)}
        {renderChannelsSection(getPrivateChannels(), "My Channels")}

      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'beige',
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
