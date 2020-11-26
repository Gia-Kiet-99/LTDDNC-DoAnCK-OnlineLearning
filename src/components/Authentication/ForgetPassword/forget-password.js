import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View, TextInput, Image} from 'react-native';
import textInputStyles from "../styles/text-input-styles";

const ForgetPassword = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
            </View>
            <View>
                <TextInput placeholder='Enter your email' selectionColor={'#888'} style={textInputStyles.textInput}/>
            </View>
            <TouchableOpacity style={[styles.button,styles.loginButton]}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },
    imageWrapper: {
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 200,
    },
    button: {
        marginTop: 10,
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
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }

})

export default ForgetPassword;
