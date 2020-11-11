import React, {useState} from 'react';
import {Video} from "expo-av";
import {View, StyleSheet} from 'react-native';

const VideoPlayer = (props) => {
    const [player, setPlayer] = useState(null)
    return (
        <View style={styles.container}>
            <Video
                // ref={(ref) => setPlayer(ref)}
                source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
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


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
    },
    player: {
        flex: 1,
    },
});

export default VideoPlayer;
