import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import DownloadListItem from "../ListItem/download-list-item";
import CourseListItem from "../ListItem/course-list-item";
import ListItemSeparator from "../../Common/list-item-separator";
import PathListItem from "../ListItem/path-list-item";
import AuthorListItem from "../ListItem/author-list-item";
import HeaderRightButtons from "../../Common/header-right-buttons";
import {listName} from "../../../globals/constants";
import {authors, courses, downloads, paths} from "../../../localize/data";


const StudyList = (props) => {
    props.navigation?.setOptions({headerRight: () => (<HeaderRightButtons navigation={props.navigation}/>)})

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

    const renderList = (kind) => {
        switch (kind) {
            case listName.course:
                return <FlatList showsVerticalScrollIndicator={false}
                                 data={courses}
                                 renderItem={renderCourseItem}
                                 keyExtractor={item => item.id}
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
        paddingHorizontal: 0,
    }
})

export default StudyList;
