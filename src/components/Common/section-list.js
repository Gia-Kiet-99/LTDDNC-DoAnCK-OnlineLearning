import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import PathsSectionItem from "../Main/Browse/PathsSectionItem/paths-section-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSectionItem from "../Main/Browse/AuthorSectionItem/author-section-item";
import ChannelSectionItem from "../Main/Home/ChannelSectionItem/channel-section-item";

const SectionList = (props) => {

    const renderListItem = (list) => {
        switch (props.kind) {
            case 'path-session':
                return list.map(item => <PathsSectionItem key={item.id} item={item}/>);
            case 'course-session':
                return list.map(item => <SectionCoursesItem key={item.id} item={item}/>);
            case 'author-session':
                return list.map(item => <AuthorSectionItem key={item.id} item={item}/>);
            case 'popular-skill':
                return list.map(item => <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{item.skill}</Text>
                </TouchableOpacity>)
            case 'channel-session':
                return list.map(item => <ChannelSectionItem key={item.id} item={item}/>)
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

export default SectionList;
