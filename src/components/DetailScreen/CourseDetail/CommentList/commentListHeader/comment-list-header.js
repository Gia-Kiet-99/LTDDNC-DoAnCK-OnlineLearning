import React, {useContext, useState} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import {AuthenticationContext} from "../../../../../provider/authentication-provider";

function CommentListHeader(props) {
  const authContext = useContext(AuthenticationContext)
  const [comment, setComment] = useState("")

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row', paddingVertical: 20,
        paddingTop: 15,
        alignItems: 'center'
      }}>
        <Image style={styles.avatar}
               source={{uri: authContext.state.userInfo.avatar}}/>
        <TouchableOpacity
          onPress={props.showReviewModal}
          style={styles.writeReviewButton}>
          <Text style={styles.writeReviewText}>Write a review</Text>
        </TouchableOpacity>
        {/*<TextInput*/}
        {/*  multiline={true}*/}
        {/*  selectionColor={'#888'}*/}
        {/*  style={styles.textInput}*/}
        {/*  onChangeText={(text) => setComment(text)}*/}
        {/*  placeholder="Write comment"*/}
        {/*  value={comment}/>*/}
        {/*<TouchableOpacity*/}
        {/*  onPress={props.onSendButtonPressed}*/}
        {/*  style={styles.sendButton}>*/}
        {/*  <Image style={styles.sendImage}*/}
        {/*         source={require("../../../../../../assets/right-arrow.png")}/>*/}
        {/*</TouchableOpacity>*/}
      </View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 48 / 2,
    marginRight: 15
  },
  sendButton: {
    padding: 5,
    paddingTop: 7
  },
  sendImage: {
    height: 24,
    width: 24,
  },
  textInput: {
    fontSize: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 16,
    marginRight: 10
  },
  writeReviewButton: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 5,

  },
  writeReviewText: {
    color: "white"
  }
})

export default CommentListHeader;