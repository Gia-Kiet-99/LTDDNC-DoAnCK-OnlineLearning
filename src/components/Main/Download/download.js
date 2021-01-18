import React, {useRef} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionBar from "../../Common/action-bar";
import {titleName} from "../../../globals/constants";
import {Video} from "expo-av";
import * as FileSystem from 'expo-file-system'
import {deleteDownloadCourse} from "../../../core/services/download-service";

const Download = (props) => {
  console.log("Download")

  /* Use state */
  const player = useRef(null)

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

  const testDown = async () => {
    // console.log(FileSystem.documentDirectory)
    // console.log(await FileSystem.readDirectoryAsync(FileSystem.documentDirectory))
    await deleteDownloadCourse()
  }
  return (
    <View style={styles.container}>
      {/*<StatusBar translucent={false} backgroundColor="white" barStyle='dark-content' animated={true}/>*/}
      <ActionBar title={titleName.download} navigation={props.navigation}/>
      <View style={styles.content}>
        <DownloadHeader/>

        {/*<View style={{height: 200}}>*/}
        {/*  <Video*/}
        {/*    ref={player}*/}
        {/*    source={{uri: 'file:///data/user/0/host.exp.exponent/files/ExperienceData/%2540anonymous%252Fklearn-de610623-1976-499a-9a4d-03b236b550e5/small.mp4'}}*/}
        {/*    // source={{uri: 'http://techslides.com/demos/sample-videos/small.mp4'}}*/}
        {/*    rate={1.0}*/}
        {/*    volume={1.0}*/}
        {/*    isMuted={false}*/}
        {/*    useNativeControls={true}*/}
        {/*    usePoster={true}*/}
        {/*    // posterSource={require('../../../../../assets/girl.jpg')}*/}
        {/*    resizeMode={Video.RESIZE_MODE_CONTAIN}*/}
        {/*    shouldPlay={false}*/}
        {/*    isLooping={false}*/}
        {/*    style={{flex: 1}}*/}
        {/*  />*/}
        {/*</View>*/}
      </View>
      <Button title={'test download'} onPress={testDown}/>
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
