import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import textInputStyles from "../styles/text-input-styles";
import {apiSendEmail} from "../../../core/services/authentication-service";
import {ScreenName} from "../../../globals/constants";
import LoadIndicator from "../../Common/load-indicator";

const ForgetPassword = (props) => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const validateEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      return true
    } else {
      setMessage("Invalid email")
      return false
    }
  }
  const sendEmail = () => {
    if (validateEmail(email)) {
      setMessage("")
      setLoading(true)
      apiSendEmail(email).then((response) => {
        if (response.status === 200) {
          Alert.alert("", "Email has been sent")
        }
      }).catch((e) => {
        console.error(e)
        Alert.alert("", "Error")
      }).finally(() => {
        setLoading(false)
      })
    }
  }
  const renderMessage = (message) => {
    if (message) {
      return <View style={styles.messageWrapper}>
        <Text style={styles.message}>{message}</Text>
      </View>
    } else {
      if (loading) {
        return <View style={{paddingVertical: 5}}>
          <LoadIndicator/>
        </View>
      }
      return <View/>
    }
  }

  return (
    <View style={styles.container}>
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
      {renderMessage(message)}
      <TouchableOpacity
        onPress={sendEmail}
        style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
    borderRadius: 3
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
  },
  messageWrapper: {
    marginVertical: 5,
    alignItems: 'center'
  },
  message: {
    fontWeight: 'bold',
    color: '#34495e'
  }

})

export default ForgetPassword;
