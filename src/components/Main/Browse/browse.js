import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ImageButton from "../../Common/image-button";
import Section from "../../Common/section";
import ActionBar from "../../Common/action-bar";

const titles = [
    {
        id: 1,
        title: 'CONFERENCES',
        source: '../../../../assets/image.jpg'
    },
    {
        id: 2,
        title: 'CERTIFICATION',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 3,
        title: 'Software\nDEVELOPMENT',
        source: '../../../../assets/background-image-5.jpg'
    },
    {
        id: 4,
        title: 'IT\nOPS',
        source: '../../../../assets/background-image-2.jpg'
    },
    {
        id: 5,
        title: 'Information\nAND\nCYBER SECURITY',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 6,
        title: 'DATA\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 7,
        title: 'BUSINESS\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 8,
        title: 'Creative\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 9,
        title: 'MANUFACTURING\nAND\nDESIGN',
        source: '../../../../assets/image1.jpg'
    },
    {
        id: 10,
        title: 'ARCHITECTURE\nAND\nCONSTRUCTION',
        source: '../../../../assets/image1.jpg'
    }
]

const skills = [
    {
        id: 1,
        skill: 'Angular'
    },
    {
        id: 2,
        skill:'JavaScript'},
    {
        id: 3,
        skill:'C# '
    },
    {
        id: 4,
        skill:'Java',
    },
    {
        id: 5,
        skill:'ASP.NET'
    },
    {
        id: 6,
        skill:'Node.js'
    },
]

const paths = [
    {
        id: 1,
        title: 'AWS Certified Database - Specialty (DBS-C01)',
        count: '3 courses'
    },
    {
        id: 2,
        title: 'Big Data LDN 2020',
        count: '44 courses'
    },
    {
        id: 3,
        title: 'Securing ASP.NET and ASP.NET Core Applications',
        count: '14 courses'
    }
]

const authors = [
    {
        id: 1,
        avatar: '../../../../assets/avatar.png',
        name: 'Gia Kiet'
    },
    {
        id: 2,
        avatar: '../../../../assets/avatar.png',
        name: 'Simon'
    },
    {
        id: 3,
        avatar: '../../../../assets/avatar.png',
        name: 'Cristiano Ronaldo'
    },
    {
        id: 4,
        avatar: '../../../../assets/avatar.png',
        name: 'Lionel Messi'
    },
    {
        id: 5,
        avatar: '../../../../assets/avatar.png',
        name: 'Bailey Newton'
    },
    {
        id: 6,
        avatar: '../../../../assets/avatar.png',
        name: 'Gerry Burns'
    },
]

const renderImageButton = (titles) => {
    return titles.map((item) => <View style={{width:200}}>
        <ImageButton key={item.id} title={item.title} source={require('../../../../assets/background-image-3.jpg')}/>
    </View>)
}

const Browse = (props) => {
    return (
        <View style={styles.container}>
            <ActionBar title={'Browse'}/>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={styles.recommend}>
                    <ImageButton title={'NEW\nRELEASE'} source={require('../../../../assets/background-image.jpg')}/>

                    <ImageButton title={'RECOMMENDED\nFOR YOU'}
                                 source={require('../../../../assets/background4.jpg')}/>

                    <ScrollView style={styles.buttonList} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {renderImageButton(titles)}
                    </ScrollView>
                </View>

                <Section kind='popular-skill' title={'Popular Skills'} list={skills}/>

                <Section kind='path-session' title='Paths' list={paths} showSeeAllButton={true}/>

                <Section kind='author-session' title='Top authors' list={authors}/>
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
