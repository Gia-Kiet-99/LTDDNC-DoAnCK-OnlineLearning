import React, {useContext} from 'react';
import {Button, PermissionsAndroid, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionBar from "../../Common/action-bar";
import {titleName} from "../../../globals/constants";



const Download = (props) => {
  console.log("Download")
  // const {getDownloadedCourses, removeAllDownloadedCourses} = useContext(CourseContext)
  // const data = getDownloadedCourses()

  // const onRemoveAllButtonClick = () => {
  //   if (data && data.length > 0) {
  //     removeAllDownloadedCourses()
  //   }
  // }

  const DownloadHeader = () => {
    return (
      <View style={styles.overView}>
        <Text style={styles.text}>0 courses</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // const testDown = async () => {
  //   await apiDownloadCourse()
  // }
  return (
    <View style={styles.container}>
      {/*<StatusBar translucent={false} backgroundColor="white" barStyle='dark-content' animated={true}/>*/}
      <ActionBar title={titleName.download} navigation={props.navigation}/>
      <View style={styles.content}>
        <DownloadHeader/>
        {/*<StudyList kind={listName.download}*/}
        {/*           style={styles.courseList}*/}
        {/*           navigation={props.navigation}*/}
        {/*           data={data}/>*/}
      </View>
      {/*<Button title={'test download'} onPress={testDown}/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5'
  },
  overView: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  button: {},
  courseList: {
    marginTop: 25,
  }
})

export default Download;
