import React from 'react';
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import ImageButton from "../../Common/image-button";
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";
import {listName, titleName} from "../../../globals/constants";
import {authors, paths, skills, titles} from "../../../localize/data";



const renderImageButton = (titles) => {
    return titles.map((item) => <View style={{width:200}}>
        <ImageButton key={item.id} title={item.title} source={require('../../../../assets/background-image-3.jpg')}/>
    </View>)
}

const Browse = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={false} backgroundColor="white" barStyle='dark-content'/>
            <ActionBar title={titleName.browse}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={styles.recommend}>
                    <ImageButton title={'NEW\nRELEASE'} source={require('../../../../assets/background-image.jpg')}/>

                    <ImageButton title={'RECOMMENDED\nFOR YOU'}
                                 source={require('../../../../assets/background4.jpg')}/>

                    <ScrollView style={styles.buttonList} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {renderImageButton(titles)}
                    </ScrollView>
                </View>

                <Section kind={listName.popularSkill} title={'Popular Skills'} list={skills}/>
                <Section kind={listName.path} title='Paths' list={paths} showSeeAllButton={true}/>
                <Section kind={listName.author} title='Top authors' list={authors}/>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: '#f5f5f5'
    },
    recommend:{
        marginHorizontal: 5,
    },
    buttonList: {
        // marginRight: 5
    }
})

export default Browse;
