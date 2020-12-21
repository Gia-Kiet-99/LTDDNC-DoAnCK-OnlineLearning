import React, {useContext} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {AuthenticationContext} from "../../../../provider/authentication-provider";

const AccountInfo = (props) => {
  const {state} = useContext(AuthenticationContext)

  const onProfilePress = () => {
    props.navigation.navigate("Profile");
  }
  return (
    <View style={styles.accountInfoContainer}>
      <TouchableOpacity style={[styles.button, {flexDirection: 'row', alignItems: 'center'}]}
                        onPress={onProfilePress}>
        <Image style={styles.image} source={{uri: state.userInfo.avatar}}/>
        <View style={{paddingLeft: 15}}>
          <Text>{state.userInfo.email}</Text>
          <Text style={{fontSize: 12}}>{state.userInfo.name}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscription</Text>
        <Text style={{fontSize: 13, color: 'gray'}}>Pluralsight One Code.org (Limited Library) (Free)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Communication Preferences</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  accountInfoContainer: {
    flex: 1,
  },
  button: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: 'lightgray'
  },
  image: {
    height: 48,
    width: 48
  },
  buttonText: {
    fontSize: 18
  }
})

export default AccountInfo;