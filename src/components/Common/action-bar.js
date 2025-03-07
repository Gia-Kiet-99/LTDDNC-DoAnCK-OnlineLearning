import React from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

const ActionBar = (props) => {
    const onSettingPressed = () => {
        if(props.navigation !== undefined) {
            props.navigation.navigate("Setting")
        }
    }
    const onAccountPressed = () => {
        if(props.navigation !== undefined) {
            // props.navigation.navigate("Profile")
            props.navigation.navigate("Profile")
        }
    }

    return (
        <View style={styles.bar}>
            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={onSettingPressed}>
                <Image style={styles.settingIcon} source={require('../../../assets/setting.png')}/>
            </TouchableOpacity>
            <Text style={styles.textBar}>{props.title}</Text>
            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={onAccountPressed}>
                <Image style={styles.icon} source={require('../../../assets/user-blue.png')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: '#eee',
        backgroundColor: "#fff",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
    },
    textBar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    imageWrapper: {

    },
    icon: {
        width: 30,
        height: 30,
    },
    settingIcon: {
        height: 24,
        width: 24,
    }
})

export default ActionBar;
