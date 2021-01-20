import React, {useContext, useState} from 'react'
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import textInputStyles from "../../Authentication/styles/text-input-styles";
import {apiChangePassword} from "../../../core/services/user-service";
import {AuthenticationContext} from "../../../provider/authentication-provider";

function ChangePassword(props) {
  console.log("ChangePassword")
  /* Use context */
  const {state} = useContext(AuthenticationContext)

  /* Use state */
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangePassword = async () => {
    try {
      const response = await apiChangePassword(state.userInfo.id, currentPassword, newPassword)
      if (response.status === 200) {
        Alert.alert("", "Password was changed")
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
      }
    } catch (e) {
      console.error(e)
      Alert.alert("", "Change password failed")
    }
  }
  const onSubmitButtonPressed = async () => {
    if (newPassword === confirmPassword) {
      await handleChangePassword()
    } else {
      Alert.alert("", "Confirm password does not match")
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder='Current password'
          selectionColor={'#888'}
          defaultValue={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder='New password'
          selectionColor={'#888'}
          defaultValue={newPassword}
          onChangeText={text => setNewPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
      <View>
        <TextInput
          secureTextEntry={true}
          placeholder='Confirm new password'
          selectionColor={'#888'}
          defaultValue={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          style={textInputStyles.textInput}/>
      </View>
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
  }

})

export default ChangePassword;