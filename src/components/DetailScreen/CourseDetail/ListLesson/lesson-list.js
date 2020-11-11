import React from 'react';
import {SafeAreaView, Text, SectionList, StyleSheet} from 'react-native';
import {lessons} from "../../../../localize/data";
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import LessonSectionHeader from "../LessonSectionHeader/lesson-section-header";

const LessonList = (props) => {
    const renderSectionHeader = ({section: {title, totalDuration}}) => {
        return <LessonSectionHeader title={title} totalDuration={totalDuration}/>
    }
    const renderLessonItem = ({item}) => {
        return <ListLessonItem key={item.id} item={item}/>
    }

    return (
        <SafeAreaView style={styles.lessonList}>
            <SectionList
                sections={lessons}
                keyExtractor={(item, index) => item + index}
                renderItem={renderLessonItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={ListItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    lessonList: {
        flex: 1,
        // height: 200,
        // backgroundColor: 'red'
    }
})

export default LessonList;
