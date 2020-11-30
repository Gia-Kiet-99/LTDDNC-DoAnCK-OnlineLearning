import React from 'react'
import {Image, View} from "react-native";

const Rating = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
      <Image style={{height: 10, width: 10, marginRight: 2}} source={require('../../../assets/rating-full.png')}/>
      <Image style={{height: 10, width: 10, marginRight: 2}} source={require('../../../assets/rating-full.png')}/>
      <Image style={{height: 10, width: 10, marginRight: 2}} source={require('../../../assets/rating-full.png')}/>
      <Image style={{height: 10, width: 10, marginRight: 2}} source={require('../../../assets/rating-full.png')}/>
      <Image style={{height: 10, width: 10, marginRight: 2}} source={require('../../../assets/rating-full.png')}/>
    </View>
  )
}

export default Rating;
