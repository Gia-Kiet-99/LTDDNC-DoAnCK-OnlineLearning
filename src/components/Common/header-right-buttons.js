import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const HeaderRightButtons = (props) => {
    return (
        <View style={styles.headerRight}>
            <TouchableOpacity style={styles.imageWrapper}
                onPress={() => props.navigation.navigate("Setting")}
            >
                <Image style={styles.settingIcon} source={require('../../../assets/setting.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={() => props.navigation.navigate("Profile")}>
                <Image style={styles.icon} source={require('../../../assets/user-blue.png')}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRight: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

export default HeaderRightButtons;
