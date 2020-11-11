import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PathInfo = (props) => {
    return (
        <View style={[styles.description, props.containerStyle]}>
            <Text style={[styles.title, props.titleStyle]}>
                {props.title}
            </Text>

            <Text style={styles.darkText}>
                {props.count}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    description: {
        // flex: 1,
    },
    title: {
        fontSize: 14
    },
    darkText: {
        fontSize: 12,
        color: 'gray'
    }
})

export default PathInfo;
