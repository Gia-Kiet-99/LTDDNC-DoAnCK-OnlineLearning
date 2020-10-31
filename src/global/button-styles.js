import React from 'react';
import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
    button: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 3,

    },
    loginButton: {
        backgroundColor: '#2e97ff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },

    transparentButton: {
        borderWidth: 0.5,
        borderColor: "#2e97ff",
    },

    needHelpButton: {
        marginVertical: 15,
        color: '#2e97ff',
        textAlign: 'center'
    }
})

export default buttonStyles;
