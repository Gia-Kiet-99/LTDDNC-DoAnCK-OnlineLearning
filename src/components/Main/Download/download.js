import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StudyList from "../../Courses/StudyList/study-list";
import ActionBar from "../../Common/action-bar";

const DownloadHeader = () => (
    <View style={styles.overView}>
        <Text style={styles.text}>9 courses (123 MB)</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
        </TouchableOpacity>
    </View>
)

const Download = (props) => {
    return (
        <View style={styles.container}>
            <ActionBar title='Downloads'/>
            <View style={styles.content}>
                <DownloadHeader/>
                <StudyList kind='course-list' style={styles.courseList}/>
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
    button: {

    },
    courseList: {
        marginTop: 25,
    }
})

export default Download;
