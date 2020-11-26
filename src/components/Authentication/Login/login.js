import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';
import buttonStyles from "../styles/button-styles";
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import {NavigatorName, ScreenName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import checkLogin from "../../../core/services/authentication-service";


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {authentication, updateAuthenticationValue} = useContext(AuthenticationContext)

    useEffect(() => {
        if(authentication && authentication.status === 200) {
            props.navigation.navigate(NavigatorName.mainTab)
        }
    }, [authentication])

    const onLogin = () => {
        // return props.navigation.navigate(NavigatorName.mainTab)
        updateAuthenticationValue(checkLogin(username, password))
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
                <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
            </View>
            <View style={{marginTop: 10}}>
                <Text style={textStyles.labelText}>Username (or email)</Text>
                <TextInput selectionColor={'#888'}
                           style={textInputStyles.textInput}
                           onChangeText={(text) => setUsername(text)}
                           defaultValue={username}/>
            </View>

            <View>
                <Text style={[textStyles.labelText, {marginTop: 10}]}>Password</Text>
                <TextInput selectionColor={'#888'} style={textInputStyles.textInput}
                           secure={true}
                           secureTextEntry={true}
                           onChangeText={(text) => setPassword(text)}
                           defaultValue={password}
                />
            </View>

            <TouchableOpacity onPress={onLogin} activeOpacity={0.5}
                              style={[buttonStyles.button, buttonStyles.loginButton]}>

                <Text style={[textStyles.buttonText, {color: '#fff'}]}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onForgetPasswordPressed} style={styles.forgotButton}>
                <Text style={buttonStyles.needHelpButton}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Use Single Sign-On</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onSubscribePressed}
                              style={[buttonStyles.button, buttonStyles.transparentButton]}>
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
        // backgroundColor: '#222'
    },
    imageWrapper: {
        alignSelf: 'center',
        height: 150,
        width: 200,
        // backgroundColor: 'pink'
    },
    image: {
        height: "100%",
        width: "100%",
    },
    forgotButton: {
        // alignSelf: 'baseline',

    }

})

export default Login;
