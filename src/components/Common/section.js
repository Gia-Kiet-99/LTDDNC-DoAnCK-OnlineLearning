import React from 'react';
import {StyleSheet, View} from 'react-native';
import SectionHeader from "./section-header";
import SectionList from "./section-list";



const Section = (props) => {

    return (
        <View style={styles.container}>
            <SectionHeader
                navigation={props.navigation}
                kind={props.kind}
                title={props.title}
                showButton={props.showSeeAllButton}/>
            <SectionList
                navigation={props.navigation}
                kind={props.kind}
                list={props.list}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        // backgroundColor: 'beige'
    }
})

export default Section;

