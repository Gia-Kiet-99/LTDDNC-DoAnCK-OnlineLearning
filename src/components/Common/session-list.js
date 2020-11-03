import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import PathsSessionItem from "../Main/Browse/PathsSessionItem/paths-session-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSessionItem from "../Main/Browse/AuthorSessionItem/author-session-item";

const SessionList = (props) => {

    const renderListItem = (list) => {
        switch (props.kind) {
            case 'path-session':
                return list.map(item => <PathsSessionItem key={item.id} item={item}/>);
            case 'course-session':
                return list.map(item => <SectionCoursesItem key={item.id} item={item}/>);
            case 'author-session':
                return list.map(item => <AuthorSessionItem key={item.id} item={item}/>);
            case 'popular-skill':
                return list.map(item => <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{item.skill}</Text>
                </TouchableOpacity>)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListItem(props.list)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
    button: {
        paddingTop: 6,
        paddingBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: 'lightgray',
        borderRadius: 18,
        marginLeft: 5,
        marginVertical: 10
    },
    buttonText: {
        justifyContent: 'center',
    }
})

export default SessionList;
