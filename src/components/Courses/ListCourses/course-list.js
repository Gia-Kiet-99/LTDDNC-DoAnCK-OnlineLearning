import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import DownloadListItem from "../ListCourseItem/download-list-item";
import CourseListItem from "../ListCourseItem/course-list-item";

const courses = [
    {
        id: '1',
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '2',
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '3',
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '4',
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '5',
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '6',
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '7',
        title: 'Leadership for Non-managers',
        author: 'Gia Kiet',
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '8',
        title: 'iOS',
        author: 'Gia Kiet',
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg')
    },
    {
        id: '9',
        title: 'Android',
        author: 'Gia Kiet',
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg')
    },
]

const CourseList = (props) => {

    const renderCourseItem = ({item}) => (
        <CourseListItem key={item.id} item={item}/>
    )
    const renderDownloadItem = ({item}) => (
        <DownloadListItem key={item.id} item={item}/>
    )
    const renderListItem = (item) => {
        switch (props.kind){
            case 'course':
                return renderCourseItem(item);
            case 'download':
                return renderDownloadItem(item);
            default:
                return renderCourseItem(item);
        }
    }

    return (
        <SafeAreaView style={[styles.container, props.style]}>
            <FlatList showsVerticalScrollIndicator={false}
                data={courses}
                renderItem={renderListItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default CourseList;
