import React, {useContext} from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StudyList from "../../List/StudyList/study-list";
import ActionBar from "../../Common/action-bar";
import {listName, titleName} from "../../../globals/constants";
import {courses} from "../../../localize/data";
import {CourseContext} from "../../../provider/course-provider";


const Download = (props) => {
    const {getDownloadedCourses, removeAllDownloadedCourses} = useContext(CourseContext)
    const data = getDownloadedCourses()

    const onRemoveAllButtonClick = () => {
        removeAllDownloadedCourses()
    }

    const DownloadHeader = () => {
        return (
            <View style={styles.overView}>
                <Text style={styles.text}>{`${data.length} courses`}</Text>
                <TouchableOpacity style={styles.button} onPress={onRemoveAllButtonClick}>
                    <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {/*<StatusBar translucent={false} backgroundColor="white" barStyle='dark-content' animated={true}/>*/}
            <ActionBar title={titleName.download} navigation={props.navigation}/>
            <View style={styles.content}>
                <DownloadHeader/>
                <StudyList kind={listName.download}
                           style={styles.courseList}
                           navigation={props.navigation}
                           data={data}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5'
    },
    overView: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {},
    courseList: {
        marginTop: 25,
    }
})

export default Download;
