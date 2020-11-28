import React from 'react';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import PathsSectionItem from "../Main/Browse/PathsSectionItem/paths-section-item";
import SectionCoursesItem from "../Main/Home/SectionCoursesItem/section-courses-item";
import AuthorSectionItem from "../Main/Browse/AuthorSectionItem/author-section-item";
import ChannelSectionItem from "../Main/Home/ChannelSectionItem/channel-section-item";
import {listName} from "../../globals/constants";
import SkillSectionItem from "../Main/Browse/SkillSectionItem/skill-section-item";

const SectionList = (props) => {

    const renderListItem = ({item}) => {
        switch (props.kind) {
            case listName.path:
                return <PathsSectionItem key={item.id} item={item} navigation={props.navigation}/>
            case listName.course:
            case listName.favoriteCourse:
                return <SectionCoursesItem key={item.id} item={item} navigation={props.navigation}/>
            case listName.author:
                return <AuthorSectionItem key={item.id} item={item} navigation={props.navigation}/>
            case listName.channel:
                return <ChannelSectionItem key={item.id} item={item} navigation={props.navigation}/>
            case listName.popularSkill:
                return <SkillSectionItem key={item.id} item={item} navigation={props.navigation}/>
        }
    }

    return (
        <View style={styles.container}>
            <FlatList data={props.list}
                      renderItem={renderListItem}
                      horizontal={true}
                      keyExtractor={item => item.id}
                      showsHorizontalScrollIndicator={false}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    }
})

export default SectionList;
