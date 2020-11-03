import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SessionHeader = (props) => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.header}>
                {props.title}
            </Text>
            {props.showButton === true &&
                <TouchableOpacity style={styles.detailButton}>
                    <Text style={styles.text}>See all ></Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10,
    },
    header: {
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18
    },
    detailButton: {
        backgroundColor: 'lightgray',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25,
    },
    text: {
        fontSize: 12,
    }
})

export default SessionHeader;
