import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import SectionCoursesItem from "../../Home/SectionCoursesItem/section-courses-item";
import PathsSessionItem from "../PathsSessionItem/paths-session-item";

const PathsSession = (props) => {

    const renderListItem = (courses) => {
        return courses.map((item) => <PathsSessionItem item={item}/>)
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.header}>
                    {props.title}
                </Text>
                <TouchableOpacity style={styles.detailButton}>
                    <Text>See all ></Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListItem(props.courses)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    headerWrapper: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginBottom: 10,
    },
    header: {
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18
    },
    detailButton: {
        backgroundColor: 'lightgray',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 25
    },
})

export default PathsSession

