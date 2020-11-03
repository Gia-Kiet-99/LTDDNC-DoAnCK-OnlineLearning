import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ImageBackground, View} from 'react-native';

const ImageButton = (props) => {
    return (
        <ImageBackground style={styles.button} source={props.source}>
            <TouchableOpacity style={styles.touch}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 100,
        // marginHorizontal: 5,
        marginTop: 5,
        overflow: 'hidden'
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: 'pink'
    }
})

export default ImageButton;
