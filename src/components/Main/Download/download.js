import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import StudyList from "../../List/StudyList/study-list";
import ActionBar from "../../Common/action-bar";
import {listName, titleName} from "../../../globals/constants";
import {courses} from "../../../localize/data";

const DownloadHeader = () => (
    <View style={styles.overView}>
        <Text style={styles.text}>9 courses (123 MB)</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, {color: '#2e97ff'}]}>REMOVE ALL</Text>
        </TouchableOpacity>
    </View>
)

const downloadData = () => {
    let data = []
    console.log("Download", courses.length)
    for (let i = 0; i < courses.length; i++) {
        console.log("Download", courses[i])
        if (courses[i].isDownload === true)
            data.push(courses[i])
    }
    return data;
}

const Download = (props) => {
    const data = downloadData()

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
