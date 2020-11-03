import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

const ActionBar = (props) => {
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={styles.imageWrapper}>
                <Image style={styles.settingIcon} source={require('../../../assets/setting2.png')}/>
            </TouchableOpacity>
            <Text style={styles.textBar}>{props.title}</Text>
            <TouchableOpacity style={styles.imageWrapper}>
                <Image style={styles.settingIcon} source={require('../../../assets/avatar.jpg')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    textBar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    imageWrapper: {

    },
    settingIcon: {
        width: 25,
        height: 25,
    },
})

export default ActionBar;
