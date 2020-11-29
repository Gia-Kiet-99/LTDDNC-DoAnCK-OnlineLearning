import React, {useContext} from 'react';
import {SafeAreaView, SectionList, StyleSheet} from 'react-native';
import ListLessonItem from "../ListLessonItem/list-lesson-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import SectionListHeader from "../SectionListHeader/section-list-header";
import {CourseDetailContext} from "../course-detail";

const LessonList = (props) => {
    const {item} = useContext(CourseDetailContext)
    // console.log("LessonList", item)

    const renderSectionHeader = ({section: {title, totalDuration}}) => {
        return <SectionListHeader title={title} totalDuration={totalDuration}/>
    }
    const renderLessonItem = ({item}) => {
        return <ListLessonItem key={item.id} item={item}/>
    }

    return (
        <SafeAreaView style={styles.lessonList}>
            <SectionList
                sections={item.lessons}
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
