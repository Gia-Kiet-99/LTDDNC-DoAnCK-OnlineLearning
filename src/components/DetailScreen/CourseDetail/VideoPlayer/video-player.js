import React, {useEffect, useRef, useState} from 'react';
import {Video} from "expo-av";
import {MaterialIcons} from '@expo/vector-icons';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from "react-native-webview";
import {apiGetLastWatchedLesson} from "../../../../core/services/course-service";

const VideoPlayer = (props) => {
  const videoUrl = props.videoUrl
  const courseId = props.courseId

  const player = useRef(null)
  const [url, setUrl] = useState(null)

  // const [playing, setPlaying] = useState(true);
  //
  // const onStateChange = useCallback((state) => {
  //   if (state === "ended") {
  //     setPlaying(false);
  //     Alert.alert("video has finished playing!");
  //   }
  // }, []);
  /* Use effect */
  useEffect(() => {
    if (videoUrl === undefined) {
      apiGetLastWatchedLesson(courseId).then(response => {
        if (response.status === 200) {
          setUrl(response.data.payload.videoUrl)
        }
      }).catch(e => {
        console.error(e)
      })
    } else {
      setUrl(videoUrl)
    }
  }, [videoUrl])

  const goBack = () => {
    props.navigation.goBack();
  }
  const renderVideoPlayer = (videoUrl) => {
    if (videoUrl) {
      if (videoUrl.includes("youtube.com")) {
        let uri = ""
        let strings
        if (videoUrl.includes("/embed/")) {
          strings = videoUrl.split("/")
        } else {
          strings = videoUrl.split("=")
        }

        if (Array.isArray(strings) && strings.length > 0) {
          const VIDEO_ID = strings[strings.length - 1]
          uri = `https://www.youtube.com/embed/${VIDEO_ID}`
        }
        // uri += '?autoplay=1&loop=1'
        return <WebView
          javaScriptEnabled={true}
          source={{uri: uri}}/>

      } else {
        return <Video
          ref={player}
          // source={{uri: props.uri}}
          source={{uri: videoUrl}}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          useNativeControls={true}
          usePoster={true}
          // posterSource={require('../../../../../assets/girl.jpg')}
          resizeMode={Video.RESIZE_MODE_CONTAIN}
          shouldPlay={false}
          isLooping={false}
          style={styles.player}
        />
      }
    } else {
      return <View style={{height: 200}}/>
    }
  }

  return (
    <View style={styles.container}>

      {renderVideoPlayer(url)}

      <TouchableOpacity
        style={styles.closeButton}
        onPress={goBack}>
        <MaterialIcons name="keyboard-arrow-down" size={50} color="#95a5a6"/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position: 'relative',
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

    backgroundColor: 'black'
  },
  player: {
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 30,
    left: 15
  }
});

export default VideoPlayer;
