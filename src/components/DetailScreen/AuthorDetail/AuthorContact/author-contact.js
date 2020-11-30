import React from 'react'
import {TouchableOpacity, View, StyleSheet} from 'react-native'
import {FontAwesome} from "@expo/vector-icons";

function AuthorContact(props) {
  return (
    <View style={styles.contact}>
      <TouchableOpacity style={styles.iconWrapper}>
        <FontAwesome name="facebook-square" size={28} color="#34495e"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper}>
        <FontAwesome name="instagram" size={28} color="#34495e"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconWrapper}>
        <FontAwesome name="twitter" size={28} color="#34495e"/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: 'row',
    marginTop: 15
  },
  iconWrapper: {
    marginRight: 10
  }
})

export default AuthorContact;