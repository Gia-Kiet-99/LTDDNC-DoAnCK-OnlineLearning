import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';

const SectionCoursesItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.item}>
                <Image style={styles.image} source={require('../../../../../assets/image.jpg')}/>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        {props.item.title}
                    </Text>

                    <Text style={styles.text}>
                        {props.item.author}
                    </Text>

                    <Text style={styles.text}>
                        {`${props.item.level} . ${props.item.released} . ${props.item.duration}`}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingLeft: 15,
        // backgroundColor: "lightblue"
    },
    item: {
        width: 200,
        height: 200,
        backgroundColor: '#eee',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,

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
    }
})

export default SectionCoursesItem;
