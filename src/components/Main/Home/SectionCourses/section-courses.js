import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import SectionCoursesItem from "../SectionCoursesItem/section-courses-item";

const SectionCourses = (props) => {

    const courses = [
        {
            id: 1,
            title: 'Leadership for Non-managers',
            author: 'Gia Kiet',
            level: 'Advance',
            released: 'May 2020',
            duration: '30 h'
        },
        {
            id: 2,
            title: 'iOS',
            author: 'Gia Kiet',
            level: 'Beginner',
            released: 'Aug 2020',
            duration: '25 h'
        },
        {
            id: 3,
            title: 'Android',
            author: 'Gia Kiet',
            level: 'Immediate',
            released: 'Jan 2019',
            duration: '28 h'
        }
    ]

    const renderListItem = (courses) => {
        
        return courses.map(item => <SectionCoursesItem key={item.id} item={item}/>)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>
                    {props.title}
                </Text>
                <TouchableOpacity style={styles.detailButton}>
                    <Text>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListItem(courses)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
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
        borderRadius: 25
    },
})

export default SectionCourses;

