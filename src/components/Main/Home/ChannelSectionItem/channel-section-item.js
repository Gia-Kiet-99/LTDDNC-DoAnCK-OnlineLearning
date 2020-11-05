import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Separator = () => {
    return (
        <View style={{borderBottomColor: 'pink', borderBottomWidth: 3}} />
    )
}

const ChannelSectionItem = (props) => {
    return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.image} source={require('../../../../../assets/image-1.jpg')}/>
                    <Separator/>
                    <View style={styles.description}>
                        <Text style={styles.text}>
                            {props.item.title}
                        </Text>

                        <Text style={styles.darkText}>
                            {`${props.item.level} . ${props.item.follow}`}
                        </Text>
                    </View>
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
