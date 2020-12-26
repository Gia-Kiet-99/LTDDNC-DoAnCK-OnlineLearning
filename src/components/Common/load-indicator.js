import React from 'react'
import {ActivityIndicator, View} from 'react-native'

function LoadIndicator() {
  return (
    <View style={{justifyContent: 'center', flex: 1, paddingVertical: 10}}>
      <ActivityIndicator size={30} color="#2980b9"/>
    </View>
  )
}

export default LoadIndicator;