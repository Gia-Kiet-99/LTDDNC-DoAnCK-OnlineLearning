import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import ImageButton from "../../Common/image-button";
import PopularSkills from "./PopularSkills/popular-skills";
import PathsSession from "./PathSession/paths-session";

const titles = [
    {
        title: 'CONFERENCES',
        source: '../../../../assets/image.jpg'
    },
    {
        title: 'CERTIFICATION',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'Software\nDEVELOPMENT',
        source: '../../../../assets/background-image-5.jpg'
    },
    {
        title: 'IT\nOPS',
        source: '../../../../assets/background-image-2.jpg'
    },
    {
        title: 'Information\nAND\nCYBER SECURITY',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'DATA\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'BUSINESS\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'Creative\nPROFESSIONAL',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'MANUFACTURING\nAND\nDESIGN',
        source: '../../../../assets/image1.jpg'
    },
    {
        title: 'ARCHITECTURE\nAND\nCONSTRUCTION',
        source: '../../../../assets/image1.jpg'
    }
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

const renderImageButton = (titles) => {
    return titles.map((item) => <View style={{width:200}}>
        <ImageButton title={item.title} source={require('../../../../assets/background-image-3.jpg')}/>
    </View>)
}

const Browse = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ImageButton title={'NEW\nRELEASE'} source={require('../../../../assets/background-image.jpg')}/>
                <ImageButton title={'RECOMMENDED\nFOR YOU'}
                             source={require('../../../../assets/background4.jpg')}/>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {renderImageButton(titles)}
                </ScrollView>
                <PopularSkills/>
                <PathsSession title={'Paths'} courses={paths}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink'
    }
})

export default Browse;
