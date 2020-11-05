import React from 'react';
import {FlatList,ScrollView, SafeAreaView} from 'react-native';
import CourseListItem from "./course-list-item";

const courses = [
    {
        id: 1,
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../assets/girl.jpg')
    },
    {
        id: 2,
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 3,
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 4,
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 5,
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 6,
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 7,
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 8,
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../assets/background4.jpg')
    },
    {
        id: 9,
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../assets/background4.jpg')
    },
]

const CourseList = (props) => {

    const renderListItem = ({item}) => (
        <CourseListItem key={item.id} item={item}/>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={courses}
                renderItem={renderListItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

};

import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {

    }
})

export default CourseList;
