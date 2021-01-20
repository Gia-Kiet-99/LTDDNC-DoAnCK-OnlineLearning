import React, {useContext} from 'react'
import {Image, View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native'
import buttonStyles from "../styles/button-styles";
import {AuthenticationContext} from "../../../provider/authentication-provider";
import {apiSendActivationEmail} from "../../../core/services/user-service";

function VerifyEmail(props) {
  const account = props.route.params.account
  /* Use context */
  const authContext = useContext(AuthenticationContext)

  const onConfirmButtonPressed = async () => {
    await authContext.login(account.email, account.password)
    if (!authContext.isAuthenticated) {
      Alert.alert("", "Please verify email")
    }
  }
  const onSendEmailButtonPressed = () => {
    apiSendActivationEmail(account.email).then(response => {
      if (response.status === 200) {
        Alert.alert("", "Email has been sent")
      }
    }).catch(e => {
      console.error(e)
      Alert.alert("", "Email is activated or does not exist")
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../../../assets/logo-with-name.png')}/>
      </View>
      <View>
        <Text>Please confirm your account via email <Text style={{fontWeight: 'bold'}}>{account.email}</Text> and then
          press the confirm button below</Text>
      </View>
      <TouchableOpacity style={{marginTop: 20}} onPress={onSendEmailButtonPressed}>
        <Text style={{textDecorationLine: 'underline'}}>Resend activation email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onConfirmButtonPressed}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    height: 150,
    width: 200,
  },
  button: {
    width: 100,
    borderRadius: 3,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#2980b9',
    alignSelf: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  }
})

export default VerifyEmail;