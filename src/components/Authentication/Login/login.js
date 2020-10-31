import React from 'react';
import {Text, View, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import buttonStyles from "../../../global/button-styles";
import textStyles from "../../../global/text-styles";
import textInputStyles from "../../../global/text-input-styles";

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={{marginBottom: 10}}>
                <Text style={textStyles.labelText}>Username (or email)</Text>
                <TextInput  selectionColor={'#888'} style={textInputStyles.textInput}/>
            </View>

            <View>
                <Text style={textStyles.labelText}>Password</Text>
                <TextInput selectionColor={'#888'} style={textInputStyles.textInput} secure={true} secureTextEntry={true}/>
            </View>

            <TouchableHighlight activeOpacity={0.5} style={[buttonStyles.button, buttonStyles.loginButton]}>
                <Text style={[textStyles.buttonText, {color: '#fff'}]}>Sign in</Text>
            </TouchableHighlight>

            <TouchableHighlight>
                <Text style={buttonStyles.needHelpButton}>Forgot password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Use Single Sign-On</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[buttonStyles.button, buttonStyles.transparentButton]}>
                <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Subscribe to PluralSight</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: "5%",
    },


})

export default Login;
