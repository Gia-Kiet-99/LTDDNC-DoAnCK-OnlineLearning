import React from 'react'
import {Image, View, StyleSheet} from "react-native";

const Rating = (props) => {

  const ratingValue = Math.round(props.value)

  const renderRate = (value) => {
    let ratingImages = []
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        ratingImages.push({key: i, type: "full"})
      } else {
        ratingImages.push({key: i, source: "empty"})
      }
    }
    // console.log()
    return ratingImages.map(imageInfo => {
      if (imageInfo.type === "full") {
        return <Image key={imageInfo.key} style={styles.rating} source={require("../../../assets/rating-full.png")}/>
      } else {
        return <Image key={imageInfo.key} style={styles.rating} source={require("../../../assets/rating-empty.png")}/>
      }
    });
  }

  return (
    <View style={{flex: 1, flexDirection: 'row', paddingVertical: 5}}>
      {renderRate(ratingValue)}
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    height: 10,
    width: 10,
    marginLeft: 2
  }
})

export default Rating;
