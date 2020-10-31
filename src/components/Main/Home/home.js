import React from 'react';
import {TouchableOpacity, Image, Text, View, ScrollView, StyleSheet} from 'react-native';
import SectionCourses from "./SectionCourses/section-courses";

const Bar = () => {
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={styles.imageWrapper}>
                <Image style={styles.settingIcon} source={require('../../../../assets/setting2.png')}/>
            </TouchableOpacity>
            <Text style={styles.textBar}>Home</Text>
            <TouchableOpacity style={styles.imageWrapper}>
                <Image style={styles.settingIcon} source={require('../../../../assets/avatar.jpg')}/>
            </TouchableOpacity>
        </View>
    );
}

const Home = () => {
    return (
        <View style={styles.container}>
            <Bar/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
                <SectionCourses title='Continue learning'/>
                <SectionCourses title='Path'/>
                <SectionCourses title='Channel'/>
                <SectionCourses title='Bookmarks'/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bar: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    textBar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    imageWrapper: {

    },
    settingIcon: {
        width: 25,
        height: 25,
    },
    listSection: {
        backgroundColor: '#eee'
    },
})

export default Home;
