import React from 'react'
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {ScreenName} from "../../../../globals/constants";

function AuthorButton(props) {
  const data = props.data

  const onAuthorButtonPressed = () => {
    props.navigation.navigate(ScreenName.authorDetail, {
      authorId: data.authorId
    })
  }

  return (
    <TouchableOpacity
      style={styles.authorWrapper}
      onPress={onAuthorButtonPressed}
    >
      <Image style={styles.avatar} source={{uri: data.authorAvatar}}/>
      <Text>{data.authorName}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  authorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 3,
    paddingRight: 15,
    marginTop: 8,
    marginRight: 8,
    borderRadius: 36 / 2,
    alignSelf: 'baseline'
  },
  avatar: {
    height: 25,
    width: 25,
    marginRight: 5,
    borderRadius: 30 / 2,
  },
})

export default AuthorButton;