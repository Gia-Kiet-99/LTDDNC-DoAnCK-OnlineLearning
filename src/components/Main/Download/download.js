import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CourseList from "../../Courses/ListCourses/course-list";
import ActionBar from "../../Common/action-bar";

const Download = (props) => {
    return (
        <View style={styles.container}>
            <ActionBar title='Download'/>
            <View style={styles.content}>
                <View style={styles.overView}>
                    <Text style={styles.text}>9 courses (123 MB)</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
                    </TouchableOpacity>
                </View>

                <CourseList kind='download' style={styles.courseList}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 15,
    },
    overView: {
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
        marginTop: 15,
    }
})

export default Download;
