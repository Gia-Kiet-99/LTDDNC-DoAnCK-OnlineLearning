import React from 'react'
import {TouchableHighlight, Image, Text, View, StyleSheet} from "react-native"

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../../assets/Pluralsight.png')}/>
            </View>
            <TouchableHighlight style={[styles.button,styles.loginButton]}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, styles.transparentButton]}>
                <Text style={[styles.buttonText, {color: '#2e97ff'}]}>Subscribe to Pluralsight</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.button, styles.transparentButton]}>
                <Text style={[styles.buttonText, {color: '#2e97ff'}]}>Explore without a subscription</Text>
            </TouchableHighlight>

            {/*<Pressable onPress={() => {Alert.alert("aloalo")}}>*/}
            {/*    <Text>I'm pressable!</Text>*/}
            {/*</Pressable>*/}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10
    },
    imageWrapper: {
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 250,
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

export default Register;
