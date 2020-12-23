import React, {useState} from 'react';
import {Video} from "expo-av";
import {MaterialIcons} from '@expo/vector-icons';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const VideoPlayer = (props) => {
  const [player, setPlayer] = useState(null)
  const goBack = () => {
    props.navigation.goBack();
  }

  // console.log("VideoPlayer", props.url)
  return (
    <View style={styles.container}>
      <Video
        // ref={(ref) => setPlayer(ref)}
        source={{uri: props.uri}}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        useNativeControls={true}
        // usePoster={true}
        // posterSource={require('../../../../../assets/girl.jpg')}
        resizeMode={Video.RESIZE_MODE_COVER}
        shouldPlay={false}
        isLooping={false}
        style={styles.player}
      />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => props.navigation.goBack()}
      >
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
