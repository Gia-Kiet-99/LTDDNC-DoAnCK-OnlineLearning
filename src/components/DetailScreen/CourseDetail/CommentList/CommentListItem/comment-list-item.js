import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import Rating from "../../../../Common/rating";

function CommentListItem(props) {
  const commentInfo = props.item

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image style={styles.avatar} source={{uri: commentInfo.user.avatar}}/>
      </View>
      <View style={styles.rightColumn}>
        <View style={{
          flex: 1, flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'pink'
        }}>
          <Text style={styles.userName}>{commentInfo.user.name}</Text>
          <Rating value={commentInfo.averagePoint}/>
        </View>
        <Text>{commentInfo.content}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15
  },
  leftColumn: {
    // flex: 1,
  },
  rightColumn: {
    flex: 1,
    marginLeft: 15,
    // flexDirection: 'row'
    // backgroundColor: 'beige'
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2
  },
  userName: {
    fontSize: 16,
    marginRight: 10
  }
})

export default CommentListItem;