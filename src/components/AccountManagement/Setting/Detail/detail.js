import React, {useContext} from "react";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {Alert, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Detail = (props) => {
  const {logout} = useContext(AuthenticationContext)
  const onOkClicked = () => {
    logout();
  }

  const onSignOut = () => (
    Alert.alert(
      "Sign out",
      "Are you sure?",
      [
        {
          text: 'Ok',
          onPress: onOkClicked
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ]
    )
  )
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Captions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Advance Options</Text>
      </TouchableOpacity>

      <View style={styles.button}>
        <Text style={styles.buttonText}>App version</Text>
        <Text style={{fontSize: 13}}>2.38.0</Text>
      </View>

      <TouchableOpacity onPress={onSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: 'lightgray'
  },
  buttonText: {
    fontSize: 18
  },
  signOutButton: {
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#2e97ff",
  },
  signOutText: {
    fontSize: 16,
    color: '#2e97ff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

export default Detail;