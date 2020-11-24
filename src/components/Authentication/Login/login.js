import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import buttonStyles from "../styles/button-styles";
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import {NavigatorName, ScreenName} from "../../../globals/constants";


const Login = (props) => {
    const onLogin = () => {
        return props.navigation.navigate(NavigatorName.mainTab)
    }
    const onForgetPasswordPressed = () => {
        return props.navigation.navigate(ScreenName.forgetPassword)
    }
    const onSubscribePressed = () => {
        return props.navigation.navigate(ScreenName.register)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../../../../assets/Pluralsight.png')}/>
            </View>
            <View style={{marginBottom: 10}}>
                <Text style={textStyles.labelText}>Username (or email)</Text>
                <TextInput  selectionColor={'#888'} style={textInputStyles.textInput}/>
            </View>

            <View>
                <Text style={textStyles.labelText}>Password</Text>
                <TextInput selectionColor={'#888'} style={textInputStyles.textInput} secure={true} secureTextEntry={true}/>
            </View>

            <TouchableOpacity onPress={onLogin} activeOpacity={0.5} style={[buttonStyles.button, buttonStyles.loginButton]}>
                <Text style={[textStyles.buttonText, {color: '#fff'}]}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onForgetPasswordPressed} style={styles.forgotButton}>
                <Text style={buttonStyles.needHelpButton}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Use Single Sign-On</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onSubscribePressed} style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Subscribe to PluralSight</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: "5%",
    },
    imageWrapper: {
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 250,
    },
    forgotButton: {
        // alignSelf: 'baseline',

    }

})

export default Login;
