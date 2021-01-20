import React, {useState} from 'react'
import {TouchableOpacity, Image, Text, View, StyleSheet, TextInput} from "react-native"
import textStyles from "../styles/text-styles";
import textInputStyles from "../styles/text-input-styles";
import buttonStyles from "../styles/button-styles";
import {apiRegisterAccount} from "../../../core/services/user-service";
import LoadIndicator from "../../Common/load-indicator";
import {ScreenName} from "../../../globals/constants";

const Register = (props) => {
  console.log("Register")

  /* Use state */
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  /* Internal function */
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
    if (password.length < 6) {
      setMessage("Password has at least 6 characters")
      return false
    } else {
      return true
    }
  }
  const validatePhoneNumber = (phoneNumber) => {
    const reg = /^\d{10}$/
    if (reg.test(phoneNumber)) {
      return true
    } else {
      setMessage("Invalid phone number")
      return false
    }
  }
  const validateConfirmPassword = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true
    } else {
      setMessage("Confirm password does not match")
      return false
    }
  }
  const handleSubscribe = async (email, phone, password) => {
    setLoading(true)
    try {
      const response = await apiRegisterAccount(email, phone, password)
      if (response.status === 200) {
        props.navigation.navigate(ScreenName.verifyEmail, {
          account: {
            email: email,
            password: password
          }
        })
      }
    } catch (e) {
      console.error(e)
      setMessage("Email was already taken")
    } finally {
      setLoading(false)
    }
  }
  const onSubscribe = async () => {
    const isValidConfirmPassword = validateConfirmPassword(password, confirmPassword)
    const isValidPassword = validatePassword(password)
    const isValidPhone = validatePhoneNumber(phone)
    const isValidEmail = validateEmail(email)
    if (isValidConfirmPassword && isValidPassword && isValidPhone && isValidEmail) {
      setMessage("")
      await handleSubscribe(email, phone, password)
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
      <View style={{marginBottom: 10}}>
        <Text style={textStyles.labelText}>Email</Text>
        <TextInput
          selectionColor={'#888'}
          blurOnSubmit={true}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          defaultValue={email}
          style={textInputStyles.textInput}/>
      </View>

      <View>
        <Text style={textStyles.labelText}>Phone number</Text>
        <TextInput
          selectionColor={'#888'}
          style={textInputStyles.textInput}
          defaultValue={phone}
          keyboardType="numeric"
          onChangeText={text => setPhone(text)}/>
      </View>

      <View>
        <Text style={textStyles.labelText}>Password</Text>
        <TextInput
          selectionColor={'#888'}
          style={textInputStyles.textInput}
          secure={true}
          defaultValue={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}/>
      </View>

      <View>
        <Text style={textStyles.labelText}>Confirm password</Text>
        <TextInput
          selectionColor={'#888'}
          defaultValue={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={textInputStyles.textInput}
          secure={true} secureTextEntry={true}/>
      </View>
      {renderMessage(message)}
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
    width: 200,
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

export default Register;
