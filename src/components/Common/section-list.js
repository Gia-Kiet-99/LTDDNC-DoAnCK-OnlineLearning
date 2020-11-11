import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import PathsSectionItem from "../Main/Browse/PathsSectionItem/paths-section-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSectionItem from "../Main/Browse/AuthorSectionItem/author-section-item";
import ChannelSectionItem from "../Main/Home/ChannelSectionItem/channel-section-item";
import {listName} from "../../globals/constants";

const SectionList = (props) => {
    const Skill = (props) => {
        return <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.item.skill}</Text>
        </TouchableOpacity>
    }

    const renderListItem = (list) => {
        switch (props.kind) {
            case listName.path:
                return list.map((item) => <PathsSectionItem key={item.id} item={item} navigation={props.navigation}/>);
            case listName.course:
                return list.map((item) => <SectionCoursesItem key={item.id} item={item} navigation={props.navigation}/>);
            case listName.author:
                return list.map((item) => <AuthorSectionItem key={item.id} item={item} navigation={props.navigation}/>);
            case listName.channel:
                return list.map((item) => <ChannelSectionItem key={item.id} item={item} navigation={props.navigation}/>)
            case listName.popularSkill:
                return list.map((item) => <Skill key={item.id} item={item} navigation={props.navigation}/>)
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
