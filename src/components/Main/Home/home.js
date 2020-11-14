import React from 'react';
import {Image, View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import Section from "../../Common/section";
import {listName, titleName} from "../../../globals/constants";
import {channels, courses} from "../../../localize/data";
import ActionBar from "../../Common/action-bar";

const Home = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={false} backgroundColor="transparent" barStyle="dark-content"/>
            <ActionBar title={titleName.home} navigation={props.navigation}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.listSection}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.image} source={require('../../../../assets/background-image-3.jpg')}/>
                </View>
                <Section navigation={props.navigation} kind={listName.course} title={'Continue learning'} list={courses} showSeeAllButton={true}/>
                <Section navigation={props.navigation} kind={listName.channel} title={'Channels'} list={channels} showSeeAllButton={true}/>
                <Section navigation={props.navigation} kind={listName.course} title={'Course list'} list={courses} showSeeAllButton={true}/>
                <Section navigation={props.navigation} kind={listName.channel} title={'My Channels'} list={channels} showSeeAllButton={true}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'beige'
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
        height: 200,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    settingIcon: {
        width: 25,
        height: 25,
    },
    listSection: {
        backgroundColor: '#f5f5f5'
    },
})

export default Home;
