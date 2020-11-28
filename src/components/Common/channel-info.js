import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const ChannelInfo = (props) => {
    const renderInfo = () => {
        if (props.level && props.follow)
            return <Text style={styles.darkText}>
                {`${props.level} . ${props.follow}`}
            </Text>
    }

    return (
        <View style={[styles.channelInfo, props.containerStyle]}>
            <Text style={props.titleStyle}>
                {props.title}
            </Text>
            {renderInfo()}
        </View>
    );
};

const styles = StyleSheet.create({
    channelInfo: {
        // flex: 1,
        // backgroundColor: 'pink'
    },
    title: {
        // fontSize: 14
    },
    darkText: {
        fontSize: 12,
        color: 'gray'
    },
})

export default ChannelInfo;
