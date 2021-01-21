import React, {useContext, useState} from 'react'
import {View, StyleSheet, TextInput, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import textInputStyles from "../../Authentication/styles/text-input-styles";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import textStyles from "../../Authentication/styles/text-styles";
import buttonStyles from "../../Authentication/styles/button-styles";
import {apiUpdateProfile} from "../../../core/services/user-service";

function Editing() {
  console.log("Editing")
  /* Use context */
  const authContext = useContext(AuthenticationContext)
  const userInfo = authContext.state.userInfo

  /* Use state */
  const [avatar, setAvatar] = useState(userInfo.avatar)
  const [name, setName] = useState(userInfo.name)
  const [phone, setPhone] = useState(userInfo.phone)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  /* Internal function */
  const validateName = (name) => {
    if (name.trim()) {
      return true
    } else {
      setMessage("Invalid full name")
      return false
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
  const handleUpdateAccount = async () => {
    setLoading(true)
    try {
      // console.log(typeof phone)
      const response = await apiUpdateProfile(name, avatar, phone)
      if (response.status === 200) {
        console.log("Updated user info", response.data)
        //update state.userInfo
        authContext.updateUserInfo(response.data.payload)
        setMessage("Updated successfully")
      } else {
        setMessage("Updated failed")
        // setLoading(LOAD_FAILED)
      }
    } catch (e) {
      console.error(e)
      setMessage("Updated failed")
    } finally {
      setLoading(false)
    }
  }
  const onSubmitButtonPressed = async () => {
    const isPhoneValid = validatePhoneNumber(phone)
    const isFullNameValid = validateName(name)
    if(isFullNameValid && isPhoneValid) {
      setMessage("")
      await handleUpdateAccount()
    }
  }
  const renderUpdateStatus = (message) => {
    if (loading) {
      return <View style={{justifyContent: 'center', paddingVertical: 5}}>
        <ActivityIndicator size={24} color="#2980b9"/>
      </View>
    } else if (message) {
      return <View style={{alignItems: 'center', paddingVertical: 5}}>
        <Text style={{fontWeight: 'bold', color: '#34495e'}}>{message}</Text>
      </View>
    } else {
      return <View/>
  }
}

return (
  <View style={styles.container}>
    <View>
      <Text style={textStyles.labelText}>Full name</Text>
      <TextInput
        // inlineImageLeft='search_icon'
        blurOnSubmit={true}
        selectionColor={'#888'}
        style={[textInputStyles.textInput]}
        onChangeText={(text) => setName(text)}
        defaultValue={name}/>
    </View>
    <View style={{marginTop: 10}}>
      <Text style={textStyles.labelText}>Avatar url</Text>
      <TextInput
        blurOnSubmit={true}
        keyboardType="url"
        selectionColor={'#888'}
        style={[textInputStyles.textInput]}
        onChangeText={(text) => setAvatar(text)}
        defaultValue={avatar}/>
    </View>
    <View style={{marginTop: 10}}>
      <Text style={textStyles.labelText}>Phone number</Text>
      <TextInput
        blurOnSubmit={true}
        keyboardType="numeric"
        selectionColor={'#888'}
        style={[textInputStyles.textInput]}
        onChangeText={(text) => setPhone(text)}
        defaultValue={phone}/>
    </View>
    {renderUpdateStatus(message)}
    <TouchableOpacity
      onPress={onSubmitButtonPressed}
      style={{...buttonStyles.button, ...buttonStyles.loginButton}}>
      <Text style={[textStyles.buttonText, {color: '#fff'}]}>Update</Text>
    </TouchableOpacity>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20
  }
})

export default Editing;