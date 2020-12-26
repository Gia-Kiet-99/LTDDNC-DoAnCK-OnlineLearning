import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image, ActivityIndicator, Alert} from 'react-native';
import buttonStyles from "../styles/button-styles";
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import {ScreenName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {AppThemeContext} from "../../../provider/theme-provider";

// props.navigation.navigate(NavigatorName.mainTab)
// props.navigation.reset({
//     index: 0,
//     routes: [{ name: NavigatorName.mainTab }],
// });

const Login = (props) => {
  console.log("Login")
  const authContext = useContext(AuthenticationContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOnLogin, setOnLogin] = useState(false)

  const {theme} = useContext(AppThemeContext)

  // console.log("InitialState", authContext.state)

  const onLogin = () => {
    if (username !== "" && password !== "") {
      setOnLogin(true)
      authContext.login(username, password)
    } else {
      Alert.alert("Login", "Please enter username and password")
    }
  }
  const onForgetPasswordPressed = () => {
    return props.navigation.navigate(ScreenName.forgetPassword)
  }
  const onSubscribePressed = () => {
    return props.navigation.navigate(ScreenName.register)
  }
  const renderLoginStatus = (authentication) => {
    if (authentication && authentication.status === 404) {
      return <Text style={{fontWeight: 'bold', color: '#34495e'}}>{authentication.errorString}</Text>
    }
  }

  return (
    <View style={[styles.container, theme]}>
      {isOnLogin ?
        (
          <ActivityIndicator size="large" color="#2980b9"/>
        ) :
        (
          <View>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={textStyles.labelText}>Username (or email)</Text>
              <TextInput
                selectionColor={'#888'}
                style={[textInputStyles.textInput, styles.username]}
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

            <View style={{alignItems: 'center', marginVertical: 10}}>
              {/*{renderLoginStatus(authentication)}*/}
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
        )}
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
  username: {
    // backgroundColor: '#111',
    // borderColor: '#111'
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

  },

})

export default Login;
