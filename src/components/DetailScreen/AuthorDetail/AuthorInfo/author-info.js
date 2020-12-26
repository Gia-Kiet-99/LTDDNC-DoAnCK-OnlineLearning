import React from 'react'
import {Image, Text, View, StyleSheet} from 'react-native'

function AuthorInfo(props) {
  const authorInfo = props.authorInfo
  return (
    <View style={styles.authorInfo}>
      <Image style={styles.avatar} source={{uri: authorInfo.avatar}}/>
      <Text style={styles.authorName}>{authorInfo.name}</Text>
      <Text style={{marginTop: 5}}>KLearn Author</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  authorInfo: {
    alignItems: 'center'
  },
  avatar: {
    marginTop: 10,
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  authorName: {
    fontSize: 20,
    // fontWeight: 'bold'
  },
})

export default AuthorInfo;