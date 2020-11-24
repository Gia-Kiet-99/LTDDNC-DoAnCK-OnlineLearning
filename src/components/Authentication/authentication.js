import React, {useContext, useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenName} from "../../globals/constants";
import {AuthenticationContext} from "../../provider/authentication-provider";


const Authentication = (props) => {
    // const {authentication, updateAuthenticationValue} = useContext(AuthenticationContext)
    // console.log(authentication)

    const onSignInPressed = () => {
        return props.navigation.navigate(ScreenName.login)
    }
    const onSubscribePressed = () => {
        return props.navigation.navigate(ScreenName.register)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../assets/Pluralsight.png')}/>
            </View>
            <TouchableOpacity
                onPress={onSignInPressed}
                style={[styles.button, styles.loginButton]}
                activeOpacity={0.5}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubscribePressed} style={[styles.button, styles.transparentButton]}>
                <Text style={[styles.buttonText, {color: '#2e97ff'}]}>Subscribe to Pluralsight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.transparentButton]}
                              // onPress={() => updateAuthenticationValue({status: 123, user: {token: "abcxyz"}})}
            >
                <Text style={[styles.buttonText, {color: '#2e97ff'}]}>Explore without a subscription</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: '5%'
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

export default Authentication;
