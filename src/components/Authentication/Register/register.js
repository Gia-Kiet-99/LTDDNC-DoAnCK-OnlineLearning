import React from 'react'
import {TouchableHighlight, Image, Text, View, StyleSheet} from "react-native"
import buttonStyles from "../../../global/button-styles";
import textStyles from "../../../global/text-styles";

const Register = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../../assets/Pluralsight.png')}/>
            </View>
            <TouchableHighlight style={[buttonStyles.button,buttonStyles.loginButton]}>
                <Text style={[textStyles.buttonText, {color: '#fff'}]}>Sign in</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Subscribe to Pluralsight</Text>
            </TouchableHighlight>
            <TouchableHighlight style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Explore without a subscription</Text>
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

})

export default Register;
