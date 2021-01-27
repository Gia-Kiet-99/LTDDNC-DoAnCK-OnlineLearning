import React, {useContext, useEffect, useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import buttonStyles from "../styles/button-styles";
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import {ScreenName} from "../../../globals/constants";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {AppThemeContext} from "../../../provider/theme-provider";
import LoadIndicator from "../../Common/load-indicator";
import CheckBox from "@react-native-community/checkbox";

const Login = (props) => {
  console.log("Login")
  const authContext = useContext(AuthenticationContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOnLogin, setOnLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")

  const {theme} = useContext(AppThemeContext)

  /* Use effect */
  useEffect(() => {
    if (authContext.state.message !== "") {
      setOnLogin(false);
      setMessage(authContext.state.message)
      // Alert.alert(authContext.state.message);
    }
  }, [authContext.state.message])

  /* Function */
  const validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      return true
    } else {
      setMessage("Invalid email")
      return false
    }
  }
  const validatePassword = (password) => {
    if (password.length === 0) {
      setMessage("Invalid password")
      return false
    } else {
      return true
    }
  }
  const onLogin = () => {
    const isPasswordValid = validatePassword(password)
    const isEmailValid = validateEmail(username)

    if (isEmailValid && isPasswordValid) {
      setMessage("")
      setOnLogin(true)
      authContext.clearMessage();
      authContext.login(username, password)
    }

    // if (username.trim() !== "" && password.trim() !== "") {
    //   setOnLogin(true)
    //   authContext.clearMessage();
    //   authContext.login(username, password)
    // } else {
    //   Alert.alert("Login", "Please enter username and password")
    // }
  }
  const onForgetPasswordPressed = () => {
    return props.navigation.navigate(ScreenName.forgetPassword)
  }
  const onSubscribePressed = () => {
    return props.navigation.navigate(ScreenName.register)
  }
  const renderLoginStatus = (message) => {
    if (isOnLogin) {
      return <LoadIndicator/>
    } else {
      if (message !== "") {
        return <Text style={{fontWeight: 'bold', color: '#34495e'}}>{message}</Text>
      } else {
        return <View/>
      }
    }
  }

  return (
    <View style={[styles.container, theme]}>
      {/*<View>*/}
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={textStyles.labelText}>Username (or email)</Text>
        <TextInput
          // blurOnSubmit={true}
          textContentType="emailAddress"
          keyboardType="email-address"
          selectionColor={'#888'}
          style={[textInputStyles.textInput, styles.username]}
          onChangeText={(text) => setUsername(text)}
          defaultValue={username}/>
      </View>

      <View>
        <Text style={[textStyles.labelText, {marginTop: 10}]}>Password</Text>
        <TextInput selectionColor={'#888'} style={textInputStyles.textInput}
                   secure={true}
                   secureTextEntry={!showPassword}
                   onChangeText={(text) => setPassword(text)}
                   defaultValue={password}
        />
      </View>

      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={showPassword}
          onValueChange={setShowPassword}
          tintColors={{true: '#2e97ff'}}
          // style={styles.checkbox}
        />
        <Text>Show password</Text>
      </View>

      <View style={{alignItems: 'center', marginVertical: 10}}>
        {renderLoginStatus(message)}
        {/*{isOnLogin ? (<LoadIndicator/>) : (*/}
        {/*  <Text style={{fontWeight: 'bold', color: '#34495e'}}>{authContext.state.message}</Text>)}*/}
      </View>

      <TouchableOpacity onPress={onLogin} activeOpacity={0.5}
                        style={[buttonStyles.button, buttonStyles.loginButton]}>

        <Text style={[textStyles.buttonText, {color: '#fff'}]}>Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onForgetPasswordPressed} style={styles.forgotButton}>
        <Text style={buttonStyles.needHelpButton}>Forgot password?</Text>
      </TouchableOpacity>

      {/*<TouchableOpacity style={[buttonStyles.button, buttonStyles.transparentButton]}>*/}
      {/*  <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Use Single Sign-On</Text>*/}
      {/*</TouchableOpacity>*/}

      <TouchableOpacity onPress={onSubscribePressed}
                        style={[buttonStyles.button, buttonStyles.transparentButton]}>
        <Text style={[textStyles.buttonText, {color: '#2e97ff'}]}>Subscribe to KLearn</Text>
      </TouchableOpacity>
      {/*</View>*/}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: "5%",
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
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default Login;
