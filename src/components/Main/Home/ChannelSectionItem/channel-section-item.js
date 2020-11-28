import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChannelInfo from "../../../Common/channel-info";
import {NavigatorName, ScreenName} from "../../../../globals/constants";

const Separator = () => {
    return (
        <View style={{borderBottomColor: 'pink', borderBottomWidth: 3}}/>
    )
}

const ChannelSectionItem = (props) => {
    const item = props.item;

    const onItemPressed = () => {
        return props.navigation.navigate(NavigatorName.channelDetailStack,
            {
                screen: ScreenName.channelDetail,
                params: {
                    channelId: item.id
                }
            })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onItemPressed}>
            <View style={styles.content}>
                <View style={{backgroundColor: '#34495e'}}>
                    <Image style={styles.image} source={item.image}/>
                </View>
                <Separator/>
                <ChannelInfo
                    title={item.title}
                    level={item.level}
                    follow={item.follow}
                    style={{fontSize: 16}}
                    containerStyle={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                    }}
                    // titleStyle={channelInfoStyle.largerTitle}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        // backgroundColor: "lightblue"
    },
    content: {
        width: 200,
        height: 200,
        borderRadius: 5,
        backgroundColor: '#eee',
        overflow: 'hidden',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 5,
    },
    description: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    image: {
        height: 100,
        width: '100%'
    },

    text: {
        fontSize: 14
    },

    darkText: {
        fontSize: 12,
        color: 'gray'
    }
})

export default ChannelSectionItem;
