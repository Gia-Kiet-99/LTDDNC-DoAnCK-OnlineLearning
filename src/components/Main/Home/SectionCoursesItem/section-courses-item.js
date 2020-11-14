import React from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';
import CourseInfo from "../../../Common/course-info";

const Separator = () => {
    return (
        <View style={{borderBottomColor: 'pink', borderBottomWidth: 3}}/>
    )
}

const SectionCoursesItem = (props) => {
    const ItemPressed = () => {
        return props.navigation.navigate("CourseDetailStackNavigator",
            {
                screen: "CourseDetail",
                params: {
                    item: props.item
                }
            })
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={ItemPressed}>
            <View style={styles.content}>
                <Image style={styles.image} source={props.item.image}/>
                <Separator/>
                <CourseInfo containerStyle={courseInfoStyle.container}
                            title={props.item.title}
                            author={props.item.authorName}
                            level={props.item.level}
                            released={props.item.released}
                            duration={props.item.duration}
                />

            </View>
        </TouchableOpacity>
    );
};

const courseInfoStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    largerTitle: {
        fontSize: 16,
    }
})

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
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
    image: {
        height: 100,
        width: '100%'
    },
    courseInfo: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default SectionCoursesItem;
