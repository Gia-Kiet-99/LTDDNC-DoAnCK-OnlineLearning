import React, {useContext, useState} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import textInputStyles from "../../Authentication/styles/text-input-styles";
import {apiChangePassword} from "../../../core/services/user-service";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import LoadIndicator from "../../Common/load-indicator";
import CheckBox from "@react-native-community/checkbox";

function ChangePassword() {
  console.log("ChangePassword")
  /* Use context */
  const {state} = useContext(AuthenticationContext)

  /* Use state */
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  /* Function */
  const validatePassword = (password) => {
    if (password.length < 6) {
      setMessage("Password has at least 6 characters")
      return false
    } else {
      return true
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
  const handleChangePassword = async () => {
    setLoading(true)
    try {
      const response = await apiChangePassword(state.userInfo.id, currentPassword, newPassword)
      if (response.status === 200) {
        // Alert.alert("", "Password was changed")
        setMessage("Successfully")
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
      }
    } catch (e) {
      console.error(e)
      // Alert.alert("", "Change password failed")
      setMessage("Failed")
    } finally {
      setLoading(false)
    }
  }
  const onSubmitButtonPressed = async () => {
    const isValidConfirmPassword = validateConfirmPassword(newPassword, confirmPassword)
    const isValidNewPassword = validatePassword(newPassword)
    const isValidCurrentPassword = validatePassword(currentPassword)

    if (isValidConfirmPassword && isValidCurrentPassword && isValidNewPassword) {
      setMessage("")
      await handleChangePassword()
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder='Current password'
          selectionColor={'#888'}
          defaultValue={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
      <View>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder='New password'
          selectionColor={'#888'}
          defaultValue={newPassword}
          onChangeText={text => setNewPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
      <View>
        <TextInput
          secureTextEntry={!showPassword}
          placeholder='Confirm new password'
          selectionColor={'#888'}
          defaultValue={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={showPassword}
          onValueChange={setShowPassword}
          tintColors={{true: '#2e97ff'}}
          style={styles.checkbox}
        />
        <Text>Show password</Text>
      </View>
      {renderMessage(message)}
      <TouchableOpacity
        onPress={onSubmitButtonPressed}
        style={[styles.button, styles.loginButton]}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 15
  },
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 250,
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
  },
  messageWrapper: {
    marginVertical: 5,
    alignItems: 'center'
  },
  message: {
    fontWeight: 'bold',
    color: '#34495e'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export default ChangePassword;