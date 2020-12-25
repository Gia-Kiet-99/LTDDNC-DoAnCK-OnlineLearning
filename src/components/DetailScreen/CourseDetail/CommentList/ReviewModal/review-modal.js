import React, {useState} from 'react'
import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native'
import {Rating} from "react-native-ratings";

function ReviewModal(props) {
  const [reviewModalVisible, setReviewModalVisible] = useState(false)
  const [comment, setComment] = useState("")

  const hideReviewModal = () => {
    setReviewModalVisible(false)
  }
  const showReviewModal = () => {
    setReviewModalVisible(true)
  }

  return (
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
                startingValue={0}
                fractions={0}
                onFinishRating={props.formalityRatingCompleted}
              />
            </View>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>Content point</Text>
              <Rating
                imageSize={18}
                fractions={0}
                startingValue={0}
                onFinishRating={props.contentRatingCompleted}
              />
            </View>
            <View style={styles.ratingRow}>
              <Text style={styles.ratingText}>Presentation point</Text>
              <Rating
                imageSize={18}
                fractions={0}
                startingValue={0}
                onFinishRating={props.presentationRatingCompleted}
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
              onPress={props.hideReviewModal}>
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={props.sendReview}>
              <Text style={{...styles.modalText, color: '#2980b9'}}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {

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
    color: '#555'
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

export default ReviewModal;