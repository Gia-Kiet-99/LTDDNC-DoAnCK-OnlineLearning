import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


const ChannelInfo = (props) => {
    return (
        <View style={[styles.description, props.containerStyle]}>
            <Text style={props.titleStyle}>
                {props.title}
            </Text>
            <Text style={styles.darkText}>
                {`${props.level} . ${props.follow}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    description: {
        flex: 1,
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
