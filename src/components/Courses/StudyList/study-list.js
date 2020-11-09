import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import DownloadListItem from "../ListItem/download-list-item";
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import PathListItem from "../ListItem/path-list-item";
import AuthorListItem from "../ListItem/author-list-item";
import HeaderRightButtons from "../../Common/header-right-buttons";

const courses = [
    {
        id: '1',
        title: 'Leadership for Non-managers',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '2',
        title: 'iOS',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '3',
        title: 'Android',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '4',
        title: 'Leadership for Non-managers',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '5',
        title: 'iOS',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '6',
        title: 'Android',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '7',
        title: 'Leadership for Non-managers',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Advance',
        released: 'May 2020',
        duration: '30 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '8',
        title: 'iOS',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Beginner',
        released: 'Aug 2020',
        duration: '25 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
    {
        id: '9',
        title: 'Android',
        authorName: 'Gia Kiet',
        authorAvatar: require('../../../../assets/girl.jpg'),
        level: 'Intermediate',
        released: 'Jan 2019',
        duration: '28 h',
        image: require('../../../../assets/girl.jpg'),
        rating: 5,
    },
]
const downloads = [
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
]
const paths = [
    {
        id: 1,
        title: 'AWS Certified Database - Specialty (DBS-C01)',
        count: '3 courses'
    },
    {
        id: 2,
        title: 'Big Data LDN 2020',
        count: '44 courses'
    },
    {
        id: 3,
        title: 'Securing ASP.NET and ASP.NET Core Applications',
        count: '14 courses'
    }
]
const authors = [
    {
        id: 1,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Gia Kiet',
        numberOfCourses: 4
    },
    {
        id: 2,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Simon',
        numberOfCourses: 5
    },
    {
        id: 3,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Cristiano Ronaldo',
        numberOfCourses: 6
    },
    {
        id: 4,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Lionel Messi',
        numberOfCourses: 13
    },
    {
        id: 5,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Bailey Newton',
        numberOfCourses: 9
    },
    {
        id: 6,
        avatar: require('../../../../assets/avatar.png'),
        name: 'Gerry Burns',
        numberOfCourses: 4
    }
]

const StudyList = (props) => {
    props.navigation.setOptions({headerRight: () => (<HeaderRightButtons navigation={props.navigation}/>)})

    const renderCourseItem = ({item}) => (
        <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
    )
    const renderDownloadItem = ({item}) => (
        <DownloadListItem key={item.id} item={item}/>
    )
    const renderPathItem = ({item}) => (
        <PathListItem key={item.id} item={item}/>
    )
    const renderAuthorItem = ({item}) => (
        <AuthorListItem key={item.id} item={item}/>
    )

    const renderList = (kind) => {
        switch (kind) {
            case 'course-list':
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={courses}
                                 renderItem={renderCourseItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case 'download-list':
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={downloads}
                                 renderItem={renderDownloadItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case 'path-list':
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={paths}
                                 renderItem={renderPathItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case 'author-list':
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={authors}
                                 renderItem={renderAuthorItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            default:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={courses}
                                 renderItem={renderCourseItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
        }
    }

    return (
        <SafeAreaView style={[styles.container, props.style]}>
            {renderList(props.kind)}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})

export default StudyList;
