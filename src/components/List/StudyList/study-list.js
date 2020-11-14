import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import DownloadListItem from "../ListItem/download-list-item";
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import PathListItem from "../ListItem/path-list-item";
import AuthorListItem from "../ListItem/author-list-item";
import ChannelListItem from "../ListItem/channel-list-item";
import {listName} from "../../../globals/constants";
import {authors, channels, courses, downloads, paths} from "../../../localize/data";


const StudyList = (props) => {
    /* value passing when you click See all button */
    const listType = (props.route?.params?.kind === undefined) ? props.kind : props.route?.params?.kind;
    const listStyle = (props.route?.params?.style === undefined) ? props.style : props.route?.params?.style;
    const listHeaderComponent = (props.route?.params?.listHeaderComponent) ? props.route?.params?.listHeaderComponent : props.listHeaderComponent;

    const renderCourseItem = ({item}) => (
        <CourseListItem key={item.id} item={item} navigation={props.navigation}/>
    )
    const renderDownloadItem = ({item}) => (
        <DownloadListItem key={item.id} item={item} navigation={props.navigation}/>
    )
    const renderPathItem = ({item}) => (
        <PathListItem key={item.id} item={item} navigation={props.navigation}/>
    )
    const renderAuthorItem = ({item}) => (
        <AuthorListItem key={item.id} item={item} navigation={props.navigation}/>
    )
    const renderChannelIem = ({item}) => (
        <ChannelListItem key={item.id} item={item} navigation={props.navigation}/>
    )

    /* render list base on "listType" */
    const renderList = (listType) => {
        switch (listType) {
            case listName.course:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={courses}
                                 ListHeaderComponent={listHeaderComponent}
                                 renderItem={renderCourseItem}
                                 keyExtractor={(item) => (item.id)}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case listName.download:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={downloads}
                                 renderItem={renderDownloadItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case listName.path:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={paths}
                                 renderItem={renderPathItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case listName.author:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={authors}
                                 renderItem={renderAuthorItem}
                                 keyExtractor={item => item.id}
                                 ItemSeparatorComponent={() => <ListItemSeparator/>}/>
            case listName.channel:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={channels}
                                 ListHeaderComponent={props.listHeaderComponent}
                                 ListHeaderComponentStyle={props.listHeaderComponentStyle}
                                 renderItem={renderChannelIem}
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
        <SafeAreaView style={[styles.container, listStyle]}>
            {renderList(listType)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default StudyList;
