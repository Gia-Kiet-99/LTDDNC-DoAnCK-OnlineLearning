import React, {useContext, useEffect, useState} from 'react'
import {View, StyleSheet, FlatList, Modal, Text, TouchableOpacity, Alert, TextInput, Image, Button} from 'react-native'
import CommentListItem from "./CommentListItem/comment-list-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import CommentListHeader from "./commentListHeader/comment-list-header";
import {Rating} from "react-native-ratings";
import {AuthenticationContext} from "../../../../provider/authentication-provider";
import {apiSubmitReview} from "../../../../core/services/course-service";
import {INITIAL_LOAD_STATE, LOAD_FAILED, LOAD_SUCCEEDED, LOADING} from "../../../../core/configuration/loading-config";

function CommentList(props) {
  let ratingList = props.route.params?.ratingList
  const courseId = props.route.params?.courseId

  /* Use context */
  const authContext = useContext(AuthenticationContext)

  /* Use state */
  const [reviewModalVisible, setReviewModalVisible] = useState(false)
  const [comment, setComment] = useState("")
  const [formalityPoint, setFormalityPoint] = useState(0)
  const [contentPoint, setContentPoint] = useState(0)
  const [presentationPoint, setPresentationPoint] = useState(0)
  // const [loading, setLoading] = useState(INITIAL_LOAD_STATE)
  const [refreshList, setRefreshList] = useState(false)
  const [shouldSendReview, setShouldSendReview] = useState(false)

  /* Use effect */
  useEffect(() => {
    if (shouldSendReview === true) {
      sendReview()
    }
  }, [shouldSendReview])

  /* Function */
  const renderItem = ({item}) => {
    return <CommentListItem key={item.id} item={item}/>
  }
  const renderHeader = () => {
    return <CommentListHeader showReviewModal={showReviewModal}/>
  }
  const hideReviewModal = () => {
    setReviewModalVisible(false)
  }
  const showReviewModal = () => {
    setReviewModalVisible(true)
  }
  const formalityRatingCompleted = (rating) => {
    setFormalityPoint(rating)
  }
  const contentRatingCompleted = (rating) => {
    setContentPoint(rating)
  }
  const presentationRatingCompleted = (rating) => {
    setPresentationPoint(rating)
  }
  const sendReview = () => {
    if (formalityPoint > 0 || contentPoint > 0 || presentationPoint > 0 || comment !== "") {
      apiSubmitReview(courseId, formalityPoint, contentPoint, presentationPoint, comment)
        .then(response => {
          if (response.status === 200) {
            // Alert.alert("Successfully")

            //api get your review
            //update list review
            updateReviewList()
            setRefreshList(true)
          }
        }).catch(e => {
        throw new Error()
      }).finally(() => {
        hideReviewModal()
        setShouldSendReview(false)
      })
    } else {
      hideReviewModal()
      Alert.alert("Submit", "failed")
    }
  }
  const updateReviewList = () => {
    let rating = {
      id: `${courseId}${authContext.state.userInfo.id}123`,
      userId: authContext.state.userInfo.id,
      courseId: courseId,
      content: comment,
      averagePoint: (formalityPoint + contentPoint + presentationPoint) / 3,
      user: {
        avatar: authContext.state.userInfo.avatar,
        name: authContext.state.userInfo.name
      }
    }

    // const isExists = ratingList.some(object => object.userId === ratingList.userId)
    // if(isExists) {
    //
    // }
    let isExists = false
    for (let i = 0; i < ratingList.length; i++) {
      if (ratingList[i].userId === rating.userId) {
        ratingList[i] = rating
        isExists = true
        break
      }
    }
    if (!isExists) {
      ratingList.unshift(rating)
    }
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={reviewModalVisible}
        onRequestClose={hideReviewModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              Create new review
            </Text>

            <View style={styles.rating}>
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>Formality point</Text>
                <Rating
                  imageSize={18}
                  startingValue={formalityPoint}
                  fractions={0}
                  onFinishRating={formalityRatingCompleted}
                />
              </View>
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>Content point</Text>
                <Rating
                  imageSize={18}
                  fractions={0}
                  startingValue={contentPoint}
                  onFinishRating={contentRatingCompleted}
                />
              </View>
              <View style={styles.ratingRow}>
                <Text style={styles.ratingText}>Presentation point</Text>
                <Rating
                  imageSize={18}
                  fractions={0}
                  startingValue={presentationPoint}
                  onFinishRating={presentationRatingCompleted}
                />
              </View>

            </View>

            <TextInput
              multiline={true}
              selectionColor={'#888'}
              style={styles.textInput}
              onChangeText={(text) => setComment(text)}
              placeholder="Write comment"
              value={comment}/>

            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={hideReviewModal}>
                <Text style={styles.modalText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setShouldSendReview(true)}>
                <Text style={{
                  ...styles.modalText, fontWeight: 'bold',
                  color: '#2980b9'
                }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={ratingList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={refreshList}
        ItemSeparatorComponent={ListItemSeparator}
        ListHeaderComponent={renderHeader}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    // backgroundColor: 'beige',
    // opacity: 0.5,
  },
  modalView: {
    width: '95%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    // opacity: 1,
    // borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalButton: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#3498db',
    padding: 10,
    marginTop: 10,
    // borderRadius: 5,
    // borderWidth: 1,
    // borderColor: 'lightgray'
  },
  modalText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#555',
  },
  modalTitle: {
    alignItems: 'center',
    // backgroundColor: 'pink',
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444'
  },
  rating: {
    padding: 10
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  ratingText: {
    fontSize: 15
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
    // flex: 1,
    fontSize: 14,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10
  },

})

export default CommentList;