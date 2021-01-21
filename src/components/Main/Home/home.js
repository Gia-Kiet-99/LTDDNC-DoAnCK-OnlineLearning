import React from 'react';
import {Image, View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Section from "../../Common/section";
import {listType, titleName} from "../../../globals/constants";
import ActionBar from "../../Common/action-bar";

const Home = (props) => {
  console.log("Home")

  const renderContinueLearningSection = () => {
    // if (favoriteCourses && favoriteCourses.length > 0) {
    return <Section navigation={props.navigation} kind={listType.continueCourse}
                    title={titleName.continueLearning}
                    showSeeAllButton={true}/>
    // }
  }
  // const renderChannelsSection = (channels, title) => {
  //   if (channels && channels.length > 0) {
  //     return <Section navigation={props.navigation} kind={listName.channel}
  //                     title={title} list={channels}
  //                     showSeeAllButton={true}/>
  //   }
  // }
  const renderCourseListSection = (list) => {
    if (list && list.length > 0) {
      return <Section navigation={props.navigation} kind={listType.continueCourse}
                      title={'Course list'} list={list}
                      showSeeAllButton={true}/>
    }
  }

  return <View style={styles.container}>
    {/*{isLoading ? (*/}
    {/*  <View style={{justifyContent: 'center', flex: 1}}>*/}
    {/*    <ActivityIndicator size="large" color="#2980b9"/>*/}
    {/*  </View>*/}
    {/*) : (*/}
    {/*  <View>*/}
    <StatusBar translucent={false} backgroundColor="transparent" barStyle="dark-content"/>
    <ActionBar title={titleName.home} navigation={props.navigation}/>
    <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../../../assets/image-online-education.jpg')}/>
      </View>

      <Section navigation={props.navigation} kind={listType.continueCourse}
               title={titleName.continueLearning}
               showSeeAllButton={true}/>

      <Section navigation={props.navigation} kind={listType.favoriteCourse}
               title={titleName.favoriteCourse}
               showSeeAllButton={true}/>

      <Section navigation={props.navigation} kind={listType.recommendCourse}
               title={titleName.recommendCourse}
               showSeeAllButton={true}/>


      {/*{renderContinueLearningSection(favoriteCourses)}*/}
      {/*{renderChannelsSection(getPublicChannels(), "Channels")}*/}

      {/*{renderContinueLearningSection()}*/}

      {/*{renderChannelsSection(getPrivateChannels(), "My Channels")}*/}

    </ScrollView>
  </View>
  {/*)}*/
  }
  {/*</View>*/
  }
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
