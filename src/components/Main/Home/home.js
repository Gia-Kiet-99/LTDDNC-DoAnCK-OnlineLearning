import React from 'react';
import {Image, View, ScrollView, StyleSheet} from 'react-native';
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";

const channels = [
    {
        id: 1,
        image: require('../../../../assets/image-1.jpg'),
        title: 'CS Principles - Technology Career Overview',
        level: 'Professional Services',
        follow: '62 follow',
    },
    {
        id: 2,
        image: require('../../../../assets/image-1.jpg'),
        title: 'CS Principles - Technology Career Overview',
        level: 'Professional Services',
        follow: '62 follow',
    },
    {
        id: 3,
        image: require('../../../../assets/image-1.jpg'),
        title: 'CS Principles - Technology Career Overview',
        level: 'Professional Services',
        follow: '62 follow',
    },
    {
        id: 4,
        image: require('../../../../assets/image-1.jpg'),
        title: 'CS Principles - Technology Career Overview',
        level: 'Professional Services',
        follow: '62 follow',
    },
]

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

const Home = () => {
    return (
        <View style={styles.container}>
            {/*<ActionBar title='Home'/>*/}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={require('../../../../assets/ROG_G14.jpg')}/>
                </View>
                <Section kind={'channel-session'} title={'Channels'} list={channels} showSeeAllButton={true}/>
                <Section kind={'course-session'} title={'Course list'} list={courses} showSeeAllButton={true}/>
                <Section kind={'channel-session'} title={'My Channels'} list={channels} showSeeAllButton={true}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    textBar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    imageWrapper: {
        height: 200,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    settingIcon: {
        width: 25,
        height: 25,
    },
    listSection: {
        backgroundColor: '#f5f5f5'
    },
})

export default Home;
