import React from 'react';
import {StyleSheet, View} from 'react-native';
import SessionHeader from "./session-header";
import SessionList from "./session-list";



const Session = (props) => {

    return (
        <View style={styles.container}>
            <SessionHeader title={props.title} showButton={props.showSeeAllButton}/>
            <SessionList kind={props.kind} list={props.list}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        // backgroundColor: 'beige'
    }
})

export default Session;

