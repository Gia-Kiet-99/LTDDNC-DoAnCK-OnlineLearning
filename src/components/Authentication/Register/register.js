import React from 'react'
import {TouchableOpacity, Image, Text, View, StyleSheet, TextInput} from "react-native"
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import buttonStyles from "../styles/button-styles";
import {ScreenName} from "../../../globals/constants";

const Register = (props) => {
    const onSubscribe = () => {
        return props.navigation.navigate(ScreenName.login)
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

            <View>
                <Text style={textStyles.labelText}>Confirm password</Text>
                <TextInput selectionColor={'#888'} style={textInputStyles.textInput} secure={true} secureTextEntry={true}/>
            </View>

            <TouchableOpacity activeOpacity={0.5}
                              style={[buttonStyles.button, buttonStyles.loginButton]}
                              onPress={onSubscribe}>
                <Text style={[textStyles.buttonText, {color: '#fff'}]}>Subscribe</Text>
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

})

export default Register;
