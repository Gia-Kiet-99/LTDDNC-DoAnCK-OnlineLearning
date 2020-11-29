import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScreenName} from "../../globals/constants";
import {AppThemeContext, themes} from "../../provider/theme-provider";

const Authentication = (props) => {
    console.log("Authentication")
    const {theme, toggleTheme} = useContext(AppThemeContext)

    const onSignInPressed = () => {
        return props.navigation.navigate(ScreenName.login)
    }
    const onSubscribePressed = () => {
        return props.navigation.navigate(ScreenName.register)
    }

    return (
        <View style={[styles.container, theme]}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../assets/logo-with-name.png')}/>
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
                              onPress={() => toggleTheme()}
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
        padding: '5%',
        // backgroundColor: '#222'
    },
    imageWrapper: {
        alignItems: 'center',
        marginBottom: 15
    },
    image: {
        height: 200,
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
