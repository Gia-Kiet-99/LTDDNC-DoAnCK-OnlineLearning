import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DownloadHeader = (props) => {
    return (
        <View style={styles.overView}>
            <Text style={styles.text}>9 courses (123 MB)</Text>
            <TouchableOpacity>
                <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
})

export default DownloadHeader;
