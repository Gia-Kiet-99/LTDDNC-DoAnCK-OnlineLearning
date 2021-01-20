import React, {useContext, useState} from 'react'
import {View, StyleSheet, TextInput, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import textInputStyles from "../../Authentication/styles/text-input-styles";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import textStyles from "../../Authentication/styles/text-styles";
import buttonStyles from "../../Authentication/styles/button-styles";
import {apiUpdateProfile} from "../../../core/services/user-service";
import {INITIAL_LOAD_STATE, LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../core/configuration/loading-config";

function Editing() {
  console.log("Editing")
  /* Use context */
  const authContext = useContext(AuthenticationContext)
  const userInfo = authContext.state.userInfo

  /* Use state */
  const [name, setName] = useState(userInfo.name)
  const [phone, setPhone] = useState(userInfo.phone)
  const [loading, setLoading] = useState(INITIAL_LOAD_STATE)

  /* Internal function */
  const onSubmitButtonPressed = async () => {
    setLoading(LOADING)
    try {
      console.log(typeof phone)
      const response = await apiUpdateProfile(name, userInfo.avatar, phone)
      if (response.status === 200) {
        console.log("Updated user info", response.data)
        //update state.userInfo
        authContext.updateUserInfo(response.data.payload)
        setLoading(LOAD_SUCCEEDED)
      } else {
        console.log("Update account failed")
        setLoading(LOAD_FAILED)
      }
    } catch (e) {
      console.error(e)
      authContext.notifyErrorMessage("Failed")
      setLoading(LOAD_FAILED)
    }
  }
  const renderUpdateStatus = (message) => {
    switch (loading) {
      case LOADING:
        return <View style={{justifyContent: 'center', paddingVertical: 5}}>
          <ActivityIndicator size={24} color="#2980b9"/>
        </View>
      case LOAD_FAILED:
      case LOAD_SUCCEEDED:
        return <View style={{alignItems: 'center', paddingVertical: 5}}>
          <Text style={{fontWeight: 'bold', color: '#34495e'}}>{message}</Text>
        </View>
      default:
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
        <Text style={textStyles.labelText}>Phone number</Text>
        <TextInput
          blurOnSubmit={true}
          keyboardType="numeric"
          selectionColor={'#888'}
          style={[textInputStyles.textInput]}
          onChangeText={(text) => setPhone(text)}
          defaultValue={phone}/>
      </View>
      {renderUpdateStatus(authContext.state.message)}
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