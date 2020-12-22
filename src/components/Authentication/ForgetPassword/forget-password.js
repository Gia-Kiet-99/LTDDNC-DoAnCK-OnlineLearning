import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, TextInput, Image, Button, ActivityIndicator} from 'react-native';
import textInputStyles from "../styles/text-input-styles";
import {apiSendEmail} from "../../../core/services/authentication-service";
import {ScreenName} from "../../../globals/constants";

const ForgetPassword = (props) => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("NOT_SEND_EMAIL")

  const sendEmail = () => {
    if (email !== "") {
      setStatus("EMAIL_SENDING")
      apiSendEmail(email).then((response) => {
        if (response.status === 200) {
          setStatus("EMAIL_SENT")
        } else {
          setStatus("SENT_EMAIL_FAILED")
        }
      }).catch(() => {
        setStatus("SENT_EMAIL_FAILED")
      })
    }
  }

  const renderUI = () => {
    switch (status) {
      case "NOT_SEND_EMAIL":
        return <View>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
          </View>
          <TextInput
            blurOnSubmit={true}
            textContentType="emailAddress"
            keyboardType="email-address"
            defaultValue={email}
            onChangeText={(text) => setEmail(text)}
            placeholder='Enter your email'
            selectionColor={'#888'}
            style={textInputStyles.textInput}/>
          <TouchableOpacity
            onPress={sendEmail}
            style={[styles.button, styles.loginButton]}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      case "EMAIL_SENDING":
        return <View>
          <ActivityIndicator size="large" color="#2980b9"/>
        </View>
      case "EMAIL_SENT":
        return <View>
          <Text>Send email successfully</Text>
          <Button
            onPress={() => props.navigation.navigate(ScreenName.authentication)}
            title="return"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      case "SENT_EMAIL_FAILED":
        return <View>
          <Text>Send email failed</Text>
          <Button
            onPress={() => props.navigation.navigate(ScreenName.authentication)}
            title="return"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      default:
        return <View style={styles.centered}>
          <Text>Something went wrong</Text>
        </View>
    }
  }

  // console.log("ForgetPassword")
  return (
    <View style={styles.container}>
      {renderUI()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 200,
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

export default ForgetPassword;
