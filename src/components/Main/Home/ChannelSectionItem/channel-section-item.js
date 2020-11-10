import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ChannelInfo from "../../../Common/channel-info";

const Separator = () => {
    return (
        <View style={{borderBottomColor: 'pink', borderBottomWidth: 3}} />
    )
}

const ChannelSectionItem = (props) => {
    const item = props.item;

    const onItemPressed = () => {
        return props.navigation.navigate("ChannelDetail", {item: item})
    }

    return (
            <TouchableOpacity style={styles.container} onPress={onItemPressed}>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../../../../../assets/image-1.jpg')}/>
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
